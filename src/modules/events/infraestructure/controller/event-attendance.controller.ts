import { Request, Response } from 'express'

import { EventAttendanceUseCase } from '../../application/usecases/event-attendance.usecase';
import { TypeAttendanceUseCase } from '../../application/usecases/type-attendance.usecase';


import { message } from '../../../../configuration/responses/api-responses'
import { catchError } from '../../../../helpers/errors/catch-error.helper'
import { SIZE_VALUE_ZERO } from '../../../../helpers/consts/consts-general.helpers'

export class EventAttendanceController {
    
    constructor(
        private readonly eventUseCase: EventAttendanceUseCase,
        private readonly typeEventUseCase: TypeAttendanceUseCase
    ) {
        this.getAllEvents = this.getAllEvents.bind( this )
        this.getTypeEvents = this.getTypeEvents.bind( this )
        this.postEventAttendance = this.postEventAttendance.bind( this )
        this.putEventAttendance = this.putEventAttendance.bind( this )
    }

    async getAllEvents(req: Request, res: Response) {
        try {

            const results = await this.eventUseCase.getAllEventsAttendance()

            if ( SIZE_VALUE_ZERO === results.length ) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'No hay eventos que mostrar!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Todos los eventos encontrados!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }
    }

    async getTypeEvents(req: Request, res: Response) {
       
        try {

            const results = await this.typeEventUseCase.getAllTypesAttendance()

            if ( SIZE_VALUE_ZERO === results.length ) {
                return message({
                    res,
                    code: { type: 'NOT_FOUND', value: 404 },
                    msg: 'No hay tipo de evento que mostrar!'
                })
            }

            message({
                res,
                code: { type: 'SUCCESS', value: 200 },
                msg: 'Todos los tipo de eventos encontrados!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }

    }

    async postEventAttendance(req: Request, res: Response) {

        const { body } = req

        try {

            const results = await this.eventUseCase.createEvent( body )

            message({
                res,
                code: { type: 'CREATED', value: 201 },
                msg: 'Evento creado correctamente!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }

    }

    async putEventAttendance(req: Request, res: Response) {

        const { body } = req

        try {

            const results = await this.eventUseCase.updateEvent( body )

            message({
                res,
                code: { type: 'CREATED', value: 201 },
                msg: 'Evento actualizado correctamente!',
                payload: results
            })

        } catch( error: any ) {
            catchError( error, res )
        }
        
    }

}