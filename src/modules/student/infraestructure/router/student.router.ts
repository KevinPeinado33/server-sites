import { Router } from 'express'

import db from '../../../../configuration/database/connection'

import { StudentController } from '../controller/student.controller'
import { StudentUseCase } from '../../application/usecases/student.usecase'
import { StudentModel } from '../../domain/model/student.model'
import { AttendanceUseCase } from '../../application/usecases/attendance.usecase'
import { AttendanceModel } from '../../domain/model/attendance.model'
import { AttendanceController } from '../controller/attendance.controller';

const router               = Router()

const attendanceUseCase    = new AttendanceUseCase( db.getRepository( AttendanceModel ) )
const studentUseCase       = new StudentUseCase( db.getRepository( StudentModel ), attendanceUseCase )

const studentController    = new StudentController( studentUseCase )
const attendanceController = new AttendanceController( attendanceUseCase )

const { 
    getAllStudentByCycle,
    postCreateStudent,
    getReportsAttendance,
    getReportByStudentAndCycle
} = studentController

const {
    postCreateAttendance
} = attendanceController

router.get ('/get-by-cycle/:id',             getAllStudentByCycle)
router.post('/create',                       postCreateStudent)
router.post('/register-attendance',          postCreateAttendance)
router.get ('/reports-by-cycle/:id',         getReportsAttendance)
router.get ('/personal-report/:code/:cycle', getReportByStudentAndCycle)

export default router