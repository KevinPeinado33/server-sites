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
exports.SubEjeModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let SubEjeModel = class SubEjeModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.NUMBER,
        primaryKey: true,
        field: 'id_sub_eje'
    }),
    __metadata("design:type", Number)
], SubEjeModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        field: 'sub_eje'
    }),
    __metadata("design:type", String)
], SubEjeModel.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false
    }),
    __metadata("design:type", String)
], SubEjeModel.prototype, "path", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.NUMBER,
        primaryKey: true,
        field: 'id_eje'
    }),
    __metadata("design:type", Number)
], SubEjeModel.prototype, "idEje", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.NUMBER,
        primaryKey: true,
        field: 'id_padre'
    }),
    __metadata("design:type", Number)
], SubEjeModel.prototype, "idPadre", void 0);
SubEjeModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'sub_eje'
    })
], SubEjeModel);
exports.SubEjeModel = SubEjeModel;
//# sourceMappingURL=sub-axemodel.js.map