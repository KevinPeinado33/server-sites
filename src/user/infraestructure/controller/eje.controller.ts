import { Request, Response } from 'express'
import { message } from '../../../configuration/responses/api-responses'
import { catchError } from '../../../helpers/errors/catch-error.helper'

import { EjeUseCase } from '../../application/usecases/eje.usecase'

export class EjeController {

    constructor(
        private readonly ejeUseCase: EjeUseCase
    ) {
        this.getEjes = this.getEjes.bind(this)
    }

    async getEjes(req: Request, res: Response) {
        
        try {
            
            const results = await this.ejeUseCase.getAllEjes()

            if ( !results ) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'No hay ejes registrados en base de datos!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Lista de todos los ejes y sub ejes.',
                payload: results
            })
            
        } catch( error: any ) {
            catchError( error, res )
        }

    }
}