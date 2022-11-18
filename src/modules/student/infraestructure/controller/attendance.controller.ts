import { Request, Response } from 'express'

import { AttendanceUseCase } from '../../application/usecases/attendance.usecase'

import { catchError } from '../../../../helpers/errors/catch-error.helper'
import { message } from '../../../../configuration/responses/api-responses'
import { SIZE_VALUE_ZERO } from '../../../../helpers/consts/consts-general.helpers'

export class AttendanceController {
    
    constructor(
        private readonly attendanceUseCase: AttendanceUseCase
    ) {
        this.postCreateAttendance = this.postCreateAttendance.bind(this)
    }

    async postCreateAttendance({ body }: Request, res: Response) {

        const { idStudent, date } = body

        try {

            const resultRepeated = await this
                                            .attendanceUseCase
                                            .findAttendanceByDateAndStudent( idStudent, date )

            if ( SIZE_VALUE_ZERO !== resultRepeated.length ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: 'No se puede registrar 2 veces la misma asistencia!'
                })
            }

            const result = await this.attendanceUseCase.createAttendance( body )

            if ( !result ) {
                return message({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'Hubo un error al registrar asistencia!'
                })
            }

            message({
                res,
                code: { type: 'CREATED', value: 201 },
                msg: 'Asistencia registrada correctamente!',
                payload: result
            })

        } catch(error: any) {
            catchError(error, res)
        }

    }

}