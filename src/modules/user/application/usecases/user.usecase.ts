import { Repository } from 'sequelize-typescript'

import bcrypt from 'bcrypt'

import { UserModel } from '../../domain/model/user.model'
import { UserDto } from '../../domain/dto/user.dto'
import { UserRepository } from '../repository/user.repository'

export class UserUseCase {

    private HASH_SALT_MAX = 10

    constructor(
        private readonly repository     : Repository< UserModel >,
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

}
