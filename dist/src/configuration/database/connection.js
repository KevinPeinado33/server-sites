"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../user/domain/model/user.model");
const db = new sequelize_typescript_1.Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: 'bahwhlmqa3asozcb1qq6-postgresql.services.clever-cloud.com',
    username: 'ulqwrochhmlwhjl5mnmk',
    password: 'FvmHVAAs5essB2rjkOym',
    database: 'bahwhlmqa3asozcb1qq6',
    // logging: false,
    models: [user_model_1.UserModel]
});
exports.default = db;
//# sourceMappingURL=connection.js.map