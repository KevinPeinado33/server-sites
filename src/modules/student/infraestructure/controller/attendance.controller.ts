import { Request, Response } from 'express'

import { AttendanceUseCase } from '../../application/usecases/attendance.usecase'

import { catchError } from '../../../../helpers/errors/catch-error.helper'
import { message } from '../../../../configuration/responses/api-responses'

export class AttendanceController {
    
    constructor(
        private readonly attendanceUseCase: AttendanceUseCase
    ) {
        this.postCreateAttendance = this.postCreateAttendance.bind(this)
    }

    async postCreateAttendance({ body }: Request, res: Response) {

        try {

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