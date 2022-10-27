import { Repository } from 'sequelize-typescript'

import bcrypt from 'bcrypt'

import { UserModel } from '../../domain/model/user.model'
import { UserDto } from '../../domain/dto/user.dto'
import { UserServiceInterface } from '../service/user.service'
import { UserRepository } from '../../domain/repository/user.repository'

export class UserUseCase implements UserServiceInterface {

    HASH_SALT_MAX = 10

    constructor(
        private readonly repository     : Repository< UserModel >,
        private readonly userRepository : UserRepository
    ) { }

    async createUser(user: UserDto): Promise< UserModel > {
        
        const salt    = await bcrypt.genSalt( this.HASH_SALT_MAX )

        user.password = await bcrypt.hash( user.password, salt )

        return await this.repository.create({ ...user })

    }

    async getAllUser(): Promise< UserModel[] > {
        return await this.repository.findAll()
    }

    async getUserBySqlNative(): Promise< any > {
        return await this.userRepository.getUserByQueryNative()    
    }

    async findUserByEmail(email: string): Promise< UserModel | null > {
        return await this.repository.findOne({
            where: { email }
        })
    }

    async findUserById(id: number): Promise< UserModel | null > {
        return await this.repository.findByPk( id )
    }

}
