import { Repository } from 'sequelize-typescript'

import { UserModel } from '../../domain/model/user.model'
import { UserDto } from '../../domain/dto/user.dto'
import { UserUseCaseInterface } from '../interfaces/user.interfaces'

export class UserUseCase implements UserUseCaseInterface {

    constructor(
        private readonly userRepository: Repository<UserModel>
    ) { }

    async signIn(
        userName: string, 
        password: string
    ): Promise< UserModel | null > {
        return await this.userRepository.findOne({ 
                where: { userName, password }
        })
    }

    async createUser(user: UserDto): Promise< UserModel > {
        return await this.userRepository.create({ ...user })
    }

    async getAllUser(): Promise< UserModel[] > {
        return await this.userRepository.findAll()
    }

}