import { UserModel } from '../../domain/model/user.model'
import { UserDto } from '../../domain/dto/user.dto'

export interface UserServiceInterface {

    createUser(user: UserDto): Promise< UserModel >

    getAllUser(): Promise< UserModel[] >

    getUserBySqlNative(): Promise< any >

    findUserByEmail(email: string): Promise< UserModel | null >

    findUserById(id: number): Promise< UserModel | null >
    
}