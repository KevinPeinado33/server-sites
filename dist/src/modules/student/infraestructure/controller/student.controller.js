"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentController = void 0;
const consts_general_helpers_1 = require("../../../../helpers/consts/consts-general.helpers");
const api_responses_1 = require("../../../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../../../helpers/errors/catch-error.helper");
class StudentController {
    constructor(stutendUseCase) {
        this.stutendUseCase = stutendUseCase;
        this.getAllStudentByCycle = this.getAllStudentByCycle.bind(this);
        this.postCreateStudent = this.postCreateStudent.bind(this);
        this.getReportsAttendance = this.getReportsAttendance.bind(this);
        this.getReportByStudentAndCycle = this.getReportByStudentAndCycle.bind(this);
    }
    getAllStudentByCycle({ params }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            try {
                const results = yield this.stutendUseCase.findStudentsByCycle(Number(id));
                if (consts_general_helpers_1.SIZE_VALUE_ZERO === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'No existe alumnos en este ciclo!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Lista de todos los alumnos por ciclo!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    postCreateStudent({ body }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, idCycle } = body;
            try {
                const studentsFound = yield this.stutendUseCase.findStudentByCodeAndCycle(code, Number(idCycle));
                if (consts_general_helpers_1.SIZE_VALUE_ZERO !== studentsFound.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'BAD_REQUEST', value: 400 },
                        msg: `El estudiante con el codigo ${code}, ya existe en este ciclo!`
                    });
                }
                const studentCreated = yield this.stutendUseCase.createStudent(body);
                if (!studentCreated) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'INTERNAL_ERROR', value: 500 },
                        msg: 'Hubo un error al crear el usuario!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'CREATED', value: 201 },
                    msg: 'Usuario creado correctamente!',
                    payload: studentCreated
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    getReportsAttendance({ params }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            try {
                const results = yield this.stutendUseCase.reportStudentsForCycle(Number(id));
                if (consts_general_helpers_1.SIZE_VALUE_ZERO === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'INTERNAL_ERROR', value: 500 },
                        msg: 'No existe reportes!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Reportes por ciclo!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    getReportByStudentAndCycle({ params }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { code, cycle } = params;
            try {
                const result = yield this.stutendUseCase.reportByStudentAndCycle(code, Number(cycle));
                if (!result) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'Este alumno nunca asistió a los activates!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: `Reporte de asistencias del alumno ${result.names} !`,
                    payload: result
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.StudentController = StudentController;
//# sourceMappingURL=student.controller.js.map