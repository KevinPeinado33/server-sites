import { Sequelize } from 'sequelize-typescript'

import { UserModel } from '../../modules/user/domain/model/user.model'
import { AxeModel } from '../../modules/academic/domain/model/axe.model'
import { SubAxeModel } from '../../modules/academic/domain/model/sub-axe.model'

const db = new Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: 'vienbenido',
    database: 'postgres',
    logging: false,
    models: [ 
        UserModel,
        AxeModel,
        SubAxeModel
    ]
})

export default db