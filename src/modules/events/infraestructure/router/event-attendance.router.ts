import { Router } from 'express'

import db from '../../../../configuration/database/connection'
import { EventAttendanceModel } from '../../domain/model/event-attendance.model';
import { EventAttendanceUseCase } from '../../application/usecases/event-attendance.usecase';
import { TypeAttendanceModel } from '../../domain/model/type-attendance.model';
import { TypeAttendanceUseCase } from '../../application/usecases/type-attendance.usecase';
import { EventAttendanceController } from '../controller/event-attendance.controller';

const router = Router()

const eventAttendance = new EventAttendanceUseCase(db.getRepository( EventAttendanceModel ))
const typeAttendance = new TypeAttendanceUseCase(db.getRepository( TypeAttendanceModel ))

const eventController = new EventAttendanceController( eventAttendance, typeAttendance)

const {
    getAllEvents,
    getTypeEvents,
    postEventAttendance,
    putEventAttendance
} = eventController

router.get('/get-all', getAllEvents)
router.get('/get-type-events', getTypeEvents)
router.post('/create', postEventAttendance)
router.put('/update', putEventAttendance)

export default router