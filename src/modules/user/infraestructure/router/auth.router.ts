import { Router } from 'express'

import db from '../../../../configuration/database/connection'

import { UserModel } from '../../domain/model/user.model'
import { UserRepository } from '../../application/repository/user.repository'
import { UserUseCase } from '../../application/usecases/user.usecase'
import { AuthController } from '../controller/auth.controller'
import { RoleModel } from '../../domain/model/role.model'

const router            = Router()

const userRepository    = new UserRepository( db.getRepository( UserModel ) )
const userUseCase       = new UserUseCase   ( 
                            db.getRepository( UserModel ), 
                            db.getRepository( RoleModel ), 
                            userRepository 
                        )
const authController    = new AuthController( userUseCase )

const {
    signIn
} = authController


router.post('/sign-in', signIn)

// TODO agregar endpoints para el inicio de sesion con google.

export default router
