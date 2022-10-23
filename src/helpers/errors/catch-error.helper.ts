import { Response } from 'express'

import { message } from '../../configuration/responses/api-responses'

export const catchError = ( error: any, res: Response ) => message({
    res, 
    code: { type: 'INTERNAL_ERROR', value: 500 },
    msg: 'Oops, error con el servidor',
    error
})