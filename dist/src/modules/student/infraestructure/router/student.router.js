"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../../../../configuration/database/connection"));
const student_controller_1 = require("../controller/student.controller");
const student_usecase_1 = require("../../application/usecases/student.usecase");
const student_model_1 = require("../../domain/model/student.model");
const router = (0, express_1.Router)();
const studentUseCase = new student_usecase_1.StudentUseCase(connection_1.default.getRepository(student_model_1.StudentModel));
const studentController = new student_controller_1.StudentController(studentUseCase);
const { getAllStudentByCycle } = studentController;
router.get('/get-by-cycle/:id', getAllStudentByCycle);
exports.default = router;
//# sourceMappingURL=student.router.js.map