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
    constructor(repository, attendanceUseCase) {
        this.repository = repository;
        this.attendanceUseCase = attendanceUseCase;
    }
    findStudentsByCycle(idCycle) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this
                .repository
                .findAll({ raw: true, where: { idCycle } });
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
    reportStudentsForCycle(idCycle) {
        return __awaiter(this, void 0, void 0, function* () {
            const reports = [];
            const studends = yield this.findStudentsByCycle(idCycle);
            yield Promise.all(studends.map((student) => __awaiter(this, void 0, void 0, function* () {
                const report = new StudentReponse();
                const attendances = yield this
                    .attendanceUseCase
                    .findAttendancesByStudent(student.id);
                const { id, code, names, idCycle } = student;
                report.build(id, code, names, idCycle, attendances);
                reports.push(report);
            })));
            return reports;
        });
    }
}
exports.StudentUseCase = StudentUseCase;
class StudentReponse {
    constructor() { }
    build(id, code, names, idCycle, attendances) {
        this.id = id;
        this.code = code;
        this.names = names;
        this.idCycle = idCycle;
        this.attendances = attendances;
    }
}
//# sourceMappingURL=student.usecase.js.map