"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../modules/user/domain/model/user.model");
const axe_model_1 = require("../../modules/academic/domain/model/axe.model");
const sub_axe_model_1 = require("../../modules/academic/domain/model/sub-axe.model");
const db = new sequelize_typescript_1.Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: 'vienbenido',
    database: 'postgres',
    logging: false,
    models: [
        user_model_1.UserModel,
        axe_model_1.AxeModel,
        sub_axe_model_1.SubAxeModel
    ]
});
exports.default = db;
//# sourceMappingURL=connection.js.map