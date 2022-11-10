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
exports.StudentUseCase = void 0;
class StudentUseCase {
    constructor(repository) {
        this.repository = repository;
    }
    findStudentsByCycle(idCycle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .repository
                .findAll({ where: { idCycle } });
        });
    }
    createStudent(student) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.repository.create(Object.assign({}, student));
        });
    }
    findStudentByCodeAndCycle(code, idCycle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .repository
                .findAll({ where: { code, idCycle } });
        });
    }
}
exports.StudentUseCase = StudentUseCase;
//# sourceMappingURL=student.usecase.js.map