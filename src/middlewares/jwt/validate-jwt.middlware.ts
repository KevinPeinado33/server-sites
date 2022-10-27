import { Request, Response } from 'express'

import jwt from 'jsonwebtoken'

import { message } from '../../configuration/responses/api-responses'
import { catchError } from '../../helpers/errors/catch-error.helper'

export const validateJWT = async (
    req: Request, 
    res: Response, 
    next: Function
) => {
        
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

        if ( !uuid ) {
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