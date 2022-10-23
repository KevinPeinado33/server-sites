import { Request, Response } from 'express'

import jwt from 'jsonwebtoken'

import { UserModel } from '../../user/domain/model/user.model'
import { message } from '../../configuration/responses/api-responses'
import { catchError } from '../../helpers/errors/catch-error.helper'

export const validateJWT = async (req: Request | any, res: Response, next: Function) => {

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

        const user = await UserModel.findOne({
            where: { id: Number( uuid ) }
        })

        if ( !user ) {
            return message({
                res,
                code: { type: 'UNAUTHORIZED', value: 401 },
                msg: 'Token no valido, usuario no existe en BBDD.'
            })
        }

        req.user = user

        next()

    } catch ( error: any ) {
        catchError( error, res )
    }

}