"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../user/domain/model/user.model");
const eje_model_1 = require("../../user/domain/model/eje.model");
const sub_eje_model_1 = require("../../user/domain/model/sub-eje.model");
const db = new sequelize_typescript_1.Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: 'example',
    database: 'postgres',
    // logging: false,
    models: [
        user_model_1.UserModel,
        eje_model_1.EjeModel,
        sub_eje_model_1.SubEjeModel
    ]
});
exports.default = db;
//# sourceMappingURL=connection.js.map