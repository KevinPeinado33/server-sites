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
exports.TypeAttendanceModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let TypeAttendanceModel = class TypeAttendanceModel extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.PrimaryKey,
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        primaryKey: true,
        field: 'id_attendance_type'
    }),
    __metadata("design:type", Number)
], TypeAttendanceModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        allowNull: false,
        field: 'attendance_type'
    }),
    __metadata("design:type", String)
], TypeAttendanceModel.prototype, "name", void 0);
TypeAttendanceModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        timestamps: false,
        tableName: 'attendance_type'
    })
], TypeAttendanceModel);
exports.TypeAttendanceModel = TypeAttendanceModel;
//# sourceMappingURL=type-attendance.model.js.map