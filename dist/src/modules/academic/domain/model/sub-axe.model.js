"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubAxeModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let SubAxeModel = class SubAxeModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.NUMBER,
        primaryKey: true,
        field: 'id_sub_academic_axe'
    }),
    __metadata("design:type", Number)
], SubAxeModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        field: 'sub_academic_axe'
    }),
    __metadata("design:type", String)
], SubAxeModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], SubAxeModel.prototype, "path", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.NUMBER,
        field: 'id_academic_axe'
    }),
    __metadata("design:type", Number)
], SubAxeModel.prototype, "idAxe", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.NUMBER,
        field: 'id_father'
    }),
    __metadata("design:type", Number)
], SubAxeModel.prototype, "idFather", void 0);
SubAxeModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'sub_academic_axes'
    })
], SubAxeModel);
exports.SubAxeModel = SubAxeModel;
//# sourceMappingURL=sub-axe.model.js.map