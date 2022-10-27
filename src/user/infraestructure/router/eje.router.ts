import { Router } from 'express'

import db from '../../../configuration/database/connection'

import { EjeModel } from '../../domain/model/eje.model'
import { SubEjeModel } from '../../domain/model/sub-eje.model'
import { EjeUseCase } from '../../application/usecases/eje.usecase'
import { EjeController } from '../controller/eje.controller'

const router            = Router()

const ejeUseCase = new EjeUseCase( db.getRepository( EjeModel ), db.getRepository( SubEjeModel ) )
const ejeController = new EjeController( ejeUseCase )

const {
    getEjes
} = ejeController

router.get('/get-all-ejes', getEjes)

export default router