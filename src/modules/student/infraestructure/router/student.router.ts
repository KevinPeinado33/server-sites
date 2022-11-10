import { Router } from 'express'

import db from '../../../../configuration/database/connection'

import { StudentController } from '../controller/student.controller'
import { StudentUseCase } from '../../application/usecases/student.usecase';
import { StudentModel } from '../../domain/model/student.model';

const router = Router()

const studentUseCase = new StudentUseCase( db.getRepository( StudentModel ) )
const studentController = new StudentController( studentUseCase )

const { 
    getAllStudentByCycle,
    postCreateStudent
} = studentController

router.get ('/get-by-cycle/:id', getAllStudentByCycle)
router.post('/create',   postCreateStudent)

export default router