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
exports.EventAttendanceUseCase = void 0;
class EventAttendanceUseCase {
    constructor(eventRepository) {
        this.eventRepository = eventRepository;
    }
    getAllEventsAttendance() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.eventRepository.findAll({ raw: true });
        });
    }
    createEvent(dtoEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.eventRepository.create(Object.assign({}, dtoEvent));
        });
    }
    updateEvent(dtoEvent) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.eventRepository.update(Object.assign({}, dtoEvent), { where: { id: dtoEvent.id } });
        });
    }
}
exports.EventAttendanceUseCase = EventAttendanceUseCase;
//# sourceMappingURL=event-attendance.usecase.js.map