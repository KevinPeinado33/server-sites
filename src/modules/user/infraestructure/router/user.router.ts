import { Router } from 'express'

import db from '../../../../configuration/database/connection'

import { UserModel } from '../../domain/model/user.model'
import { UserRepository } from '../../application/repository/user.repository'
import { UserUseCase } from '../../application/usecases/user.usecase'
import { UserController } from '../controller/user.controller'
import { validateJWT } from '../../../../middlewares/jwt/validate-jwt.middlware'
import { RoleModel } from '../../domain/model/role.model'

const router            = Router()

const userRepository    = new UserRepository( db.getRepository( UserModel ) )
const userUseCase       = new UserUseCase   ( 
                            db.getRepository( UserModel ), 
                            db.getRepository( RoleModel ), 
                            userRepository 
                        )
const userController    = new UserController( userUseCase )

const {
    getUserById,
    postUser,
    putUser,
    getUsers,
    getSqlPrueba
} = userController


router.get ('/get-all',    getUsers)
router.get ('/buscar/:id', getUserById)
router.post('/create',     validateJWT, postUser)
router.put ('/update/:id', putUser)
router.get ('/get-nati',   getSqlPrueba)

export default router