import { Repository } from 'sequelize-typescript'

import { UserModel } from '../../domain/model/user.model'
import { UserDto } from '../../domain/dto/user.dto'
import { UserUseCaseInterface } from '../interfaces/user.interfaces'
import { UserRepository } from '../../domain/repository/user.repository'

export class UserUseCase implements UserUseCaseInterface {

    constructor(
        private readonly repository     : Repository< UserModel >,
        private readonly userRepository : UserRepository
    ) { }

    async signIn(
        userName: string, 
        password: string
    ): Promise< UserModel | null > {
        return await this.repository.findOne({
                where: { userName, password }
        })
    }

    async createUser(user: UserDto): Promise< UserModel > {
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

}