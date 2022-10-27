import { Sequelize } from 'sequelize-typescript'

import { UserModel } from '../../user/domain/model/user.model'

const db = new Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: 'example',
    database: 'postgres',
    // logging: false,
    models: [ UserModel ]
})

export default db