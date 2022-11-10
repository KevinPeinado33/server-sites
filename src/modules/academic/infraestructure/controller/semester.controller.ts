import { Request, Response } from 'express'

import { CycleUseCase } from '../../application/usecases/cycle.usecase'
import { SemesterUseCase } from '../../application/usecases/semester.usecase'

import { catchError } from '../../../../helpers/errors/catch-error.helper'
import { message } from '../../../../configuration/responses/api-responses'
import { SIZE_VALUE_ZERO } from '../../../../helpers/consts/consts-general.helpers'

export class SemesterController {

    constructor(
        private readonly semesterUseCase: SemesterUseCase,
        private readonly cycleUseCase:    CycleUseCase
    ) {
        this.getSemesters      = this.getSemesters.bind(this)
        this.getCycleBySemeter = this.getCycleBySemeter.bind(this)
    }

    async getSemesters(req: Request, res: Response) {

        try {
            
            const results = await this.semesterUseCase.findSemesters()

            if ( SIZE_VALUE_ZERO === results.length ) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'No hay semestres academicos que mostrar!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Lista de semestres!',
                payload: results
            })

        } catch( error: any ) {
            catchError(error, res)
        }

    }

    async getCycleBySemeter({ params }: Request, res: Response) {

        const { id } = params

        try {
            
            const results = await this.cycleUseCase.getCyclesBySemester( Number( id ) )

            if ( SIZE_VALUE_ZERO === results.length ) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'El semestre seleccionado no tiene ciclos academicos!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Lista de ciclos academicos por semestre!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }
        
    }

}