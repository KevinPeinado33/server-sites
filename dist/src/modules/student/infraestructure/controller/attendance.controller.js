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
exports.AttendanceController = void 0;
const catch_error_helper_1 = require("../../../../helpers/errors/catch-error.helper");
const api_responses_1 = require("../../../../configuration/responses/api-responses");
class AttendanceController {
    constructor(attendanceUseCase) {
        this.attendanceUseCase = attendanceUseCase;
        this.postCreateAttendance = this.postCreateAttendance.bind(this);
    }
    postCreateAttendance({ body }, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield this.attendanceUseCase.createAttendance(body);
                if (!result) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'INTERNAL_ERROR', value: 500 },
                        msg: 'Hubo un error al registrar asistencia!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'CREATED', value: 201 },
                    msg: 'Asistencia registrada correctamente!',
                    payload: result
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.AttendanceController = AttendanceController;
//# sourceMappingURL=attendance.controller.js.map