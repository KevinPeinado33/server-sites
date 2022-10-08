import { Sequelize } from 'sequelize-typescript'

import { UserModel } from '../../user/domain/model/user.model'

const db = new Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: 'bahwhlmqa3asozcb1qq6-postgresql.services.clever-cloud.com',
    username: 'ulqwrochhmlwhjl5mnmk',
    password: 'FvmHVAAs5essB2rjkOym',
    database: 'bahwhlmqa3asozcb1qq6',
    // logging: false,
    models: [ UserModel ]
})

export default db