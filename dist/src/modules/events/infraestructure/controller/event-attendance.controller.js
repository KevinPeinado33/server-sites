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
exports.EventAttendanceController = void 0;
const api_responses_1 = require("../../../../configuration/responses/api-responses");
const catch_error_helper_1 = require("../../../../helpers/errors/catch-error.helper");
const consts_general_helpers_1 = require("../../../../helpers/consts/consts-general.helpers");
class EventAttendanceController {
    constructor(eventUseCase, typeEventUseCase) {
        this.eventUseCase = eventUseCase;
        this.typeEventUseCase = typeEventUseCase;
        this.getAllEvents = this.getAllEvents.bind(this);
        this.getTypeEvents = this.getTypeEvents.bind(this);
        this.postEventAttendance = this.postEventAttendance.bind(this);
        this.putEventAttendance = this.putEventAttendance.bind(this);
    }
    getAllEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield this.eventUseCase.getAllEventsAttendance();
                if (consts_general_helpers_1.SIZE_VALUE_ZERO === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'No hay eventos que mostrar!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Todos los eventos encontrados!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    getTypeEvents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const results = yield this.typeEventUseCase.getAllTypesAttendance();
                if (consts_general_helpers_1.SIZE_VALUE_ZERO === results.length) {
                    return (0, api_responses_1.message)({
                        res,
                        code: { type: 'NOT_FOUND', value: 404 },
                        msg: 'No hay tipo de evento que mostrar!'
                    });
                }
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'SUCCESS', value: 200 },
                    msg: 'Todos los tipo de eventos encontrados!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    postEventAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const results = yield this.eventUseCase.createEvent(body);
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'CREATED', value: 201 },
                    msg: 'Evento creado correctamente!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
    putEventAttendance(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { body } = req;
            try {
                const results = yield this.eventUseCase.updateEvent(body);
                (0, api_responses_1.message)({
                    res,
                    code: { type: 'CREATED', value: 201 },
                    msg: 'Evento actualizado correctamente!',
                    payload: results
                });
            }
            catch (error) {
                (0, catch_error_helper_1.catchError)(error, res);
            }
        });
    }
}
exports.EventAttendanceController = EventAttendanceController;
//# sourceMappingURL=event-attendance.controller.js.map