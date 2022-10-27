import { Sequelize } from 'sequelize-typescript'

import { UserModel } from '../../user/domain/model/user.model'
import { EjeModel } from '../../user/domain/model/eje.model'
import { SubEjeModel } from '../../user/domain/model/sub-eje.model'

const db = new Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: 'example',
    database: 'postgres',
    // logging: false,
    models: [ 
        UserModel,
        EjeModel,
        SubEjeModel
    ]
})

export default db