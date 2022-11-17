import { Request, Response } from 'express'

import { StudentUseCase } from '../../application/usecases/student.usecase'
import { SIZE_VALUE_ZERO } from '../../../../helpers/consts/consts-general.helpers'
import { message } from '../../../../configuration/responses/api-responses'
import { catchError } from '../../../../helpers/errors/catch-error.helper'

export class StudentController {
    
    constructor(
        private readonly stutendUseCase: StudentUseCase
    ) {
        this.getAllStudentByCycle       = this.getAllStudentByCycle.bind(this)
        this.postCreateStudent          = this.postCreateStudent.bind(this)
        this.getReportsAttendance       = this.getReportsAttendance.bind(this)
        this.getReportByStudentAndCycle = this.getReportByStudentAndCycle.bind(this)
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

    async postCreateStudent({ body }: Request, res: Response) {

        const { code, idCycle } = body

        try {

            const studentsFound = await this.stutendUseCase.findStudentByCodeAndCycle( code, Number( idCycle ) )

            if ( SIZE_VALUE_ZERO !== studentsFound.length ) {
                return message({
                    res,
                    code: { type: 'BAD_REQUEST', value: 400 },
                    msg: `El estudiante con el codigo ${ code }, ya existe en este ciclo!`
                })
            }

            const studentCreated = await this.stutendUseCase.createStudent( body )

            if ( !studentCreated ) {
                return message({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'Hubo un error al crear el usuario!'
                })
            }

            message({
                res,
                code: { type: 'CREATED', value: 201 },
                msg: 'Usuario creado correctamente!',
                payload: studentCreated
            })
            
        } catch( error: any ) {
            catchError( error, res )
        }

    }

    async getReportsAttendance({ params }: Request, res: Response) {
        
        const { id } = params

        try {

            const results = await this.stutendUseCase.reportStudentsForCycle( Number( id ) )

            if ( SIZE_VALUE_ZERO === results.length ) {
                return message({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'No existe reportes!'
                })
            }
            
            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Reportes por ciclo!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }

    }

    async getReportByStudentAndCycle({ params }: Request, res: Response) {

        const { code, cycle } = params

        try {

            const result = await this.stutendUseCase.reportByStudentAndCycle( code, Number( cycle ) )


            if ( !result ) {
                return message({
                    res,
                    code: { type: 'INTERNAL_ERROR', value: 500 },
                    msg: 'Este alumno nunca asistió a los activates!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: `Reporte de asistencias del alumno ${ result.names } !`,
                payload: result
            })

        } catch( error: any ) {
            catchError( error, res )
        }

    }
    
}