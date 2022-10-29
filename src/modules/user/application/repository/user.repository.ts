import { Repository } from 'sequelize-typescript'

import { UserModel } from '../../domain/model/user.model'

export class UserRepository {

    constructor(
        private readonly repository: Repository< UserModel >
    ) { }

    async getUserByQueryNative(): Promise< any > {

        const query = 'SELECT * FROM tb_users'
        
        const [ results, metadata ]: any = await this
                                                .repository
                                                .sequelize
                                                ?.query( query )

        return results 

    }

}