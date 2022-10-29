import { Router } from 'express'

import db from '../../../../configuration/database/connection'

import { AxeModel } from '../../domain/model/axe.model'
import { SubAxeModel } from '../../domain/model/sub-axe.model'
import { AxeUseCase } from '../../application/usecases/axe.usecase'
import { AxeController } from '../controller/axe.controller'


const router        = Router()

const axeUseCase    = new AxeUseCase( 
    db.getRepository( AxeModel ), 
    db.getRepository( SubAxeModel ) 
)
const axeController = new AxeController( axeUseCase )

const {
    getAxes
} = axeController

router.get('/get-all', getAxes)

export default router