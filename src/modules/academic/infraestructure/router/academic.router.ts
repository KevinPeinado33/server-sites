import { Router } from 'express'

import db from '../../../../configuration/database/connection'

import { AxeModel } from '../../domain/model/axe.model'
import { SubAxeModel } from '../../domain/model/sub-axe.model'
import { AxeUseCase } from '../../application/usecases/axe.usecase'
import { AxeController } from '../controller/axe.controller'
import { SemesterController } from '../controller/semester.controller'
import { SemesterUseCase } from '../../application/usecases/semester.usecase'
import { SemesterModel } from '../../domain/model/semester.model'
import { CycleUseCase } from '../../application/usecases/cycle.usecase'
import { CycleModel } from '../../domain/model/cycle.model'


const router             = Router()

const axeUseCase         = new AxeUseCase( 
    db.getRepository( AxeModel ), 
    db.getRepository( SubAxeModel ) 
)
const semesterUseCase    = new SemesterUseCase( db.getRepository( SemesterModel ) )
const cycleUseCase       = new CycleUseCase( db.getRepository( CycleModel ) )


const semesterController = new SemesterController( semesterUseCase, cycleUseCase )
const axeController      = new AxeController( axeUseCase )


const {
    getAxes
} = axeController

const {
    getSemesters,
    getCycleBySemeter
} = semesterController


router.get('/get-axes',      getAxes)
router.get('/get-semesters',  getSemesters)
router.get('/get-cycles/:id', getCycleBySemeter)

export default router