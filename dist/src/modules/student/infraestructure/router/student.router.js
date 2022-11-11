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
const attendance_usecase_1 = require("../../application/usecases/attendance.usecase");
const attendance_model_1 = require("../../domain/model/attendance.model");
const attendance_controller_1 = require("../controller/attendance.controller");
const router = (0, express_1.Router)();
const attendanceUseCase = new attendance_usecase_1.AttendanceUseCase(connection_1.default.getRepository(attendance_model_1.AttendanceModel));
const studentUseCase = new student_usecase_1.StudentUseCase(connection_1.default.getRepository(student_model_1.StudentModel), attendanceUseCase);
const studentController = new student_controller_1.StudentController(studentUseCase);
const attendanceController = new attendance_controller_1.AttendanceController(attendanceUseCase);
const { getAllStudentByCycle, postCreateStudent, getReportsAttendance } = studentController;
const { postCreateAttendance } = attendanceController;
router.get('/get-by-cycle/:id', getAllStudentByCycle);
router.post('/create', postCreateStudent);
router.post('/register-attendance', postCreateAttendance);
router.get('/reports-by-cycle/:id', getReportsAttendance);
exports.default = router;
//# sourceMappingURL=student.router.js.map