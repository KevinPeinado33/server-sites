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

    /**
     * Para iniciar sesion en al app hay 2 maneras de hacerlo, las cuales son
     * modo profesor y modo adminisrador, el modo profesor recibimos unicamente
     * el correo, para verificar en la white list y crearle su JWT; y
     * el modo administrador es con correo y contrasenia.
     * 
     * @param param0 
     * @param res 
     * @returns 
     */
    async signIn({ body }: Request, res: Response) {
        
        const { email, passw } = body

        const isTeacher        = Boolean( email ) && !Boolean( passw )
        let   token: unknown

        try {

            const user = await this.userUseCase.findUserByEmail( email )

            if ( !user ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: `El correo ${ email }, no se ha encontrado.`
                })
            }

            if ( !user.isActive ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: `El usuario ${ user.names } está desactivado!`
                })    
            }
            

            if ( isTeacher ) {
                
                token = await generateKey( user.id! )

                return message({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: `Bienvenido profesor ${ user.names } !`,
                    payload: { user, token }
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

            token = await generateKey( user.id! )

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: `Bienvenido ${ user.names } !`,
                payload: { user, token }
            })
            
        } catch( error: any ) {
            catchError( error, res )
        }

    }

    async validateJWT(req: Request, res: Response, next: Function) {
        
        const token     = req.header('x-token')
        const secretKey = process.env.SECRET_KEY || ''
    
        console.log({ token })
        
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
            catchError( error, res, 'El tiempo límite del token ha expirado!' )
        }
    
    }

}