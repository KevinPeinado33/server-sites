import { Router } from 'express'

import db from '../../../configuration/database/connection'

import { UserUseCase } from '../../application/usecases/user.usecase'
import { UserController } from '../controller/user.controller'
import { UserModel } from '../../domain/model/user.model'

const router            = Router()

const userUseCase       = new UserUseCase( db.getRepository(UserModel) )
const userController    = new UserController( userUseCase )

const {
    getUserById,
    postUser,
    putUser,
    getUsers
} = userController

router.get ('/get-all',    getUsers)
router.get ('/:id',        getUserById)
router.post('/create',     postUser)
router.put ('/update/:id', putUser)

export default router