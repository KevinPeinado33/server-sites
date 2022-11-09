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
exports.SemesterController = void 0;
const catch_error_helper_1 = require("../../../../helpers/errors/catch-error.helper");
const api_responses_1 = require("../../../../configuration/responses/api-responses");
const consts_general_helpers_1 = require("../../../../helpers/consts/consts-general.helpers");
class SemesterController {
    constructor(semesterUseCase, cycleUseCase) {
        this.semesterUseCase = semesterUseCase;
        this.cycleUseCase = cycleUseCase;
        this.getSemesters = this.getSemesters.bind(this);
        this.getCycleBySemeter = this.getCycleBySemeter.bind(this);
    }
    getSemesters(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield this.semesterUseCase.findSemesters();
                if (consts_general_helpers_1.SIZE_VALUE_ZERO === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'No hay semestres academicos que mostrar!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Lista de semestres!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    getCycleBySemeter({ params }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = params;
            try {
                const results = yield this.cycleUseCase.getCyclesBySemester(Number(id));
                if (consts_general_helpers_1.SIZE_VALUE_ZERO === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'El semestre seleccionado no tiene ciclos academicos!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Lista de ciclos academicos por semestre!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.SemesterController = SemesterController;
//# sourceMappingURL=semester.controller.js.map