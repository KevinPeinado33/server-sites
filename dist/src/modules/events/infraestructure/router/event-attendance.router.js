"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../../../../configuration/database/connection"));
const event_attendance_model_1 = require("../../domain/model/event-attendance.model");
const event_attendance_usecase_1 = require("../../application/usecases/event-attendance.usecase");
const type_attendance_model_1 = require("../../domain/model/type-attendance.model");
const type_attendance_usecase_1 = require("../../application/usecases/type-attendance.usecase");
const event_attendance_controller_1 = require("../controller/event-attendance.controller");
const router = (0, express_1.Router)();
const eventAttendance = new event_attendance_usecase_1.EventAttendanceUseCase(connection_1.default.getRepository(event_attendance_model_1.EventAttendanceModel));
const typeAttendance = new type_attendance_usecase_1.TypeAttendanceUseCase(connection_1.default.getRepository(type_attendance_model_1.TypeAttendanceModel));
const eventController = new event_attendance_controller_1.EventAttendanceController(eventAttendance, typeAttendance);
const { getAllEvents, getTypeEvents, postEventAttendance, putEventAttendance } = eventController;
router.get('/get-all', getAllEvents);
router.get('/get-type-events', getTypeEvents);
router.post('/create', postEventAttendance);
router.put('/update', putEventAttendance);
exports.default = router;
//# sourceMappingURL=event-attendance.router.js.map