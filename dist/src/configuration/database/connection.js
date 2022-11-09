"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const user_model_1 = require("../../modules/user/domain/model/user.model");
const role_model_1 = require("../../modules/user/domain/model/role.model");
const axe_model_1 = require("../../modules/academic/domain/model/axe.model");
const sub_axe_model_1 = require("../../modules/academic/domain/model/sub-axe.model");
const semester_model_1 = require("../../modules/academic/domain/model/semester.model");
const cycle_model_1 = require("../../modules/academic/domain/model/cycle.model");
const db = new sequelize_typescript_1.Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: '4^fPVa5gCz',
    database: 'postgres',
    /* logging: false, */
    models: [
        user_model_1.UserModel,
        role_model_1.RoleModel,
        axe_model_1.AxeModel,
        sub_axe_model_1.SubAxeModel,
        semester_model_1.SemesterModel,
        cycle_model_1.CycleModel
    ]
});
exports.default = db;
//# sourceMappingURL=connection.js.map