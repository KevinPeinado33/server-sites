import { Request, Response } from 'express'

import { AxeUseCase } from '../../application/usecases/axe.usecase'

import { message } from '../../../../configuration/responses/api-responses'
import { catchError } from '../../../../helpers/errors/catch-error.helper'
import { SIZE_VALUE_ZERO } from '../../../../helpers/consts/consts-general.helpers'

export class AxeController {

    constructor(
        private readonly axeUseCase: AxeUseCase
    ) {
        this.getAxes = this.getAxes.bind(this)
    }

    async getAxes(req: Request, res: Response) {
        
        try {

            const results = await this.axeUseCase.getAllAxesAndSubAxes()

            if ( SIZE_VALUE_ZERO === results.length ) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'No hay ejes academicos que mostrar!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Todos los ejes encontrados en BBDD!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }

    }
}