import { Request, Response } from 'express'

import bcrypt from 'bcrypt'

import { UserUseCase } from '../../application/usecases/user.usecase'
import { generateKey } from '../../../../helpers/jwt/generate-jwt.helper'
import { message } from '../../../../configuration/responses/api-responses'
import { catchError } from '../../../../helpers/errors/catch-error.helper'


export class AuthController {

    constructor(
        private readonly userUseCase: UserUseCase
    ) {
        this.signIn = this.signIn.bind(this)
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

            if ( isTeacher ) {
                
                token = await generateKey( user.id! )

                return message({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Bienvenido profesor!',
                    payload: { token }
                })

            }
            
            const isCorrectPassword = await bcrypt.compare( passw, user.password )

            if ( !isCorrectPassword ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: 'Contraseña incorrecta!'
                })
            }

            token = await generateKey( user.id! )

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Bienvenido administrador!',
                payload: { token }
            })
            
        } catch( error: any ) {
            catchError( error, res )
        }

    }

}