import { Request, Response } from 'express'

import { UserUseCase } from '../../application/usecases/user.usecase'
import { message } from '../../../configuration/responses/api-responses'
import { catchError } from '../../../helpers/errors/catch-error.helper'


export class UserController {
    
    constructor(
        private readonly userUseCase: UserUseCase
    ) {
        this.getUserById  = this.getUserById.bind(this)
        this.postUser     = this.postUser.bind(this)
        this.putUser      = this.putUser.bind(this)
        this.getUsers     = this.getUsers.bind(this)
        this.getSqlPrueba = this.getSqlPrueba.bind(this)
    }

    getUserById({ params }: Request, res: Response) {

        const { id } = params

        message({
            res,
            code: { type:'SUCCESS', value: 200 },
            msg: `Se acaba de encontrar este usuario con id: ${ id }`
        })

    }

    async postUser({ body }: Request, res: Response) {
        
        try {
            
            const user = await this.userUseCase.createUser( body )

            if (!user) {
                return message({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'Error al crear el usuario'
                })
            }

            message({
                res,
                code: { type: 'CREATED', value: 201 },
                msg: 'Usuario creado correctamente!',
                payload: user
            })

        } catch( error: any ) {
            catchError( error, res )
        }

    }

    putUser({ body, params }: Request, res: Response) {
        
        const { id } = params

        message({
            res,
            code: { type: 'SUCCESS', value: 200 },
            msg: `Actualizar usuario con id ${ id }`,
            payload: body
        })

    }

    async getUsers(req: Request, res: Response) {

        try {
            
            const users = await this.userUseCase.getAllUser()
            
            if (!users) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'No se encontraron usuarios!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Todos los usuarios',
                payload: users
            })

        } catch(error: any) {
            catchError( error, res )
        }
        
    }

    async getSqlPrueba(req: Request, res: Response) {
        
        try {

            const data = await this.userUseCase.getUserBySqlNative()

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Consulta native hecha correctamente!',
                payload: data
            })

        } catch(error: any) {
            catchError( error, res )
        }

    }
    
}
