"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const connection_1 = __importDefault(require("../../../../configuration/database/connection"));
const axe_model_1 = require("../../domain/model/axe.model");
const sub_axe_model_1 = require("../../domain/model/sub-axe.model");
const axe_usecase_1 = require("../../application/usecases/axe.usecase");
const axe_controller_1 = require("../controller/axe.controller");
const semester_controller_1 = require("../controller/semester.controller");
const semester_usecase_1 = require("../../application/usecases/semester.usecase");
const semester_model_1 = require("../../domain/model/semester.model");
const cycle_usecase_1 = require("../../application/usecases/cycle.usecase");
const cycle_model_1 = require("../../domain/model/cycle.model");
const router = (0, express_1.Router)();
const axeUseCase = new axe_usecase_1.AxeUseCase(connection_1.default.getRepository(axe_model_1.AxeModel), connection_1.default.getRepository(sub_axe_model_1.SubAxeModel));
const semesterUseCase = new semester_usecase_1.SemesterUseCase(connection_1.default.getRepository(semester_model_1.SemesterModel));
const cycleUseCase = new cycle_usecase_1.CycleUseCase(connection_1.default.getRepository(cycle_model_1.CycleModel));
const semesterController = new semester_controller_1.SemesterController(semesterUseCase, cycleUseCase);
const axeController = new axe_controller_1.AxeController(axeUseCase);
const { getAxes } = axeController;
const { getSemesters, getCycleBySemeter } = semesterController;
router.get('/get-axes', getAxes);
router.get('/get-semesters', getSemesters);
router.get('/get-cycles/:id', getCycleBySemeter);
exports.default = router;
//# sourceMappingURL=academic.router.js.map