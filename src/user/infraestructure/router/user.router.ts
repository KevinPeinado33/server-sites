import { Router } from 'express'

import db from '../../../configuration/database/connection'

import { UserModel } from '../../domain/model/user.model'
import { UserRepository } from '../../domain/repository/user.repository'
import { UserUseCase } from '../../application/usecases/user.usecase'
import { UserController } from '../controller/user.controller'
import { validateJWT } from '../../../middlewares/auth/validate-jwt.middleware';

const router            = Router()

const userRepository    = new UserRepository( db.getRepository( UserModel ) )
const userUseCase       = new UserUseCase   ( db.getRepository( UserModel ), userRepository )
const userController    = new UserController( userUseCase )

const {
    getUserById,
    postUser,
    putUser,
    getUsers,
    getSqlPrueba,
    signIn
} = userController


router.post(
    '/sign-in',     
    signIn
)
router.get(
    '/get-all',    
    getUsers
)
router.get(
    '/buscar/:id', 
    getUserById
)
router.post(
    '/create', 
    validateJWT, 
    postUser
)
router.put(
    '/update/:id', 
    putUser
)
router.get(
    '/get-nati',   
    getSqlPrueba
)

export default router