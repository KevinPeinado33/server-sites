import { Request, Response } from 'express'

import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import { UserUseCase } from '../../application/usecases/user.usecase'
import { generateKey } from '../../../helpers/jwt/generate-jwt.helper'
import { message } from '../../../configuration/responses/api-responses'
import { catchError } from '../../../helpers/errors/catch-error.helper'


export class AuthController {

    constructor(
        private readonly userUseCase: UserUseCase
    ) {
        this.signIn      = this.signIn.bind(this)
        this.validateJWT = this.signIn.bind(this)
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
            
            const isCorrectPassword = await bcrypt.compare( passw, user.password )            

            if ( !isCorrectPassword ) {
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

}