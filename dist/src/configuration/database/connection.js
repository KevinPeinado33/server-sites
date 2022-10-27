"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../user/domain/model/user.model");
const db = new sequelize_typescript_1.Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: 'example',
    database: 'postgres',
    // logging: false,
    models: [user_model_1.UserModel]
});
exports.default = db;
//# sourceMappingURL=connection.js.map