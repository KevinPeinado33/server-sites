import { Repository } from 'sequelize-typescript'

import bcrypt from 'bcrypt'

import { UserModel } from '../../domain/model/user.model'
import { RoleModel } from '../../domain/model/role.model'
import { UserDto } from '../../domain/dto/user.dto'
import { UserRepository } from '../repository/user.repository'

export class UserUseCase {

    private HASH_SALT_MAX = 10
    private ROLE_TEACHER  = 'Profesor' 

    constructor(
        private readonly repository     : Repository< UserModel >,
        private readonly roleRepository : Repository< RoleModel >,
        private readonly userRepository : UserRepository
    ) { }

    async createUser(user: UserDto) {
        
        const salt    = await bcrypt.genSalt( this.HASH_SALT_MAX )

        user.password = await bcrypt.hash( user.password, salt )

        return await this.repository.create({ ...user })

    }

    async getAllUser() {
        return await this.repository.findAll()
    }

    async getUserBySqlNative() {
        return await this.userRepository.getUserByQueryNative()    
    }

    async findUserByEmail(email: string) {
        return await this.repository.findOne({
            where: { email }
        })
    }

    async findUserById(id: number) {
        return await this.repository.findByPk( id )
    }

    async userWithRoleTeacher(idRole: number) {
        
        const roleFound = await this.roleRepository.findByPk( idRole )

        if ( !roleFound ) return false

        return roleFound?.name === this.ROLE_TEACHER

    }

}
