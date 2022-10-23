import { Request, Response } from 'express'

import jwt from 'jsonwebtoken'

import { UserUseCase } from '../../application/usecases/user.usecase'
import { message } from '../../../configuration/responses/api-responses'
import { catchError } from '../../../helpers/errors/catch-error.helper'
import { generateKey } from '../../../helpers/jwt/generate-jwt.helper'

export class UserController {
    
    constructor(
        private readonly userUseCase: UserUseCase
    ) {
        this.getUserById  = this.getUserById.bind(this)
        this.postUser     = this.postUser.bind(this)
        this.putUser      = this.putUser.bind(this)
        this.getUsers     = this.getUsers.bind(this)
        this.getSqlPrueba = this.getSqlPrueba.bind(this)
        this.signIn       = this.signIn.bind(this)
        this.validateJWT  = this.validateJWT.bind(this)
    }

    async signIn({ body }: Request, res: Response) {
        
        const { email, passw } = body

        try {

            const user = await this.userUseCase.findUserByEmail( email )

            if ( !user ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: `El correo ${ email }, no se ha encontrado.`
                })
            }
            
            if ( passw !== user.password ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: `Contraseña incorrecta!`
                })
            }

            if ( !user.isActive ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: `El usuario ${ user.names } está desactivado!`
                })    
            }

            const token = await generateKey( user.id! )

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Inicio de sesión correcto!',
                payload: { user, token }
            })
            
        } catch( error: any ) {
            catchError( error, res )
        }

    }

    async validateJWT(req: Request, res: Response, next: Function) {
        
        const token     = req.header('x-token')
        const secretKey = process.env.SECRET_KEY || ''
    
        if ( !token ) {
            return message({
                res,
                code: { type: 'UNAUTHORIZED', value: 401 },
                msg: 'No hay token en la petición!'
            })
        }
    
        try {
    
            const { uuid } : any = jwt.verify( token, secretKey )
    
            const user = await this.userUseCase.findUserById( uuid )
    
            if ( !user ) {
                return message({
                    res,
                    code: { type: 'UNAUTHORIZED', value: 401 },
                    msg: 'Token no valido, usuario no existe en BBDD.'
                })
            }
    
            next()
    
        } catch ( error: any ) {
            catchError( error, res )
        }
    
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

        console.log({ body })

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