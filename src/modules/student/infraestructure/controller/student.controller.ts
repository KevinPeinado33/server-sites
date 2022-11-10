import { Request, Response } from 'express'

import { StudentUseCase } from '../../application/usecases/student.usecase'
import { SIZE_VALUE_ZERO } from '../../../../helpers/consts/consts-general.helpers'
import { message } from '../../../../configuration/responses/api-responses'
import { catchError } from '../../../../helpers/errors/catch-error.helper'

export class StudentController {
    
    constructor(
        private readonly stutendUseCase: StudentUseCase
    ) {
        this.getAllStudentByCycle = this.getAllStudentByCycle.bind(this)
    }

    async getAllStudentByCycle({ params }: Request, res: Response) {

        const { id } = params

        try {
            
            const results = await this.stutendUseCase.findStudentsByCycle( Number( id ) )

            if ( SIZE_VALUE_ZERO === results.length ) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'No existe alumnos en este ciclo!'
                })
            }

            message({
                res, 
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Lista de todos los alumnos por ciclo!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }

    }
    
}