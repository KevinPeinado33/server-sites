import { Request, Response } from 'express'

import { UserUseCase } from '../../application/usecases/user.usecase'

export class UserController {
    
    constructor(
        private readonly userUseCase: UserUseCase
    ) {
        this.getUserById = this.getUserById.bind(this)
        this.postUser    = this.postUser.bind(this)
        this.putUser     = this.putUser.bind(this)
        this.getUsers    = this.getUsers.bind(this)
    }

    getUserById({ params }: Request, res: Response) {

        const { id } = params

        res.json({
            msg: `Se encontro este ${ id }`
        })

    }

    async postUser({ body }: Request, res: Response) {

        try {
            
            const user = await this.userUseCase.createUser( body )

            if (!user) {
                return res.status(404).json({
                    msg: 'Usuario no creado!'
                })
            }
            
            res.status(201).json({
                msg: 'Usuario creado correctamente!',
                user
            })

        } catch( error: any ){
            return res.status(500).json({
                msg: 'Ops, Error con el servidor',
                error
            })
        }

    }

    putUser({ body, params }: Request, res: Response) {
        
        const { id } = params

        res.json({
            msg: `Actualizar usuario con id ${ id }`,
            response: body
        })

    }

    async getUsers(req: Request, res: Response) {

        try {
            
            const users = await this.userUseCase.getAllUser()
            
            if (!users) {
                return res.status(404).json({
                    msg: 'No se encontraron usuarios!'
                })
            }

            res.json({
                msg: 'Lista de todos los usuarios',
                users 
            })

        } catch(error: any) {
            return res.status(500).json({
                msg: 'Ops, error con el servidor!',
                error
            })
        }

    }

}