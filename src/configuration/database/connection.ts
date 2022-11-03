import { Sequelize } from 'sequelize-typescript'

import { UserModel } from '../../modules/user/domain/model/user.model'
import { RoleModel } from '../../modules/user/domain/model/role.model'
import { AxeModel } from '../../modules/academic/domain/model/axe.model'
import { SubAxeModel } from '../../modules/academic/domain/model/sub-axe.model'

const db = new Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'user_back_end',
    password: 'W^JcAu$9',
    database: 'postgres',
    logging: false,
    models: [ 
        UserModel,
        RoleModel,
        AxeModel,
        SubAxeModel
    ]
})

export default db