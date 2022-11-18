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
const student_response_1 = require("../../infraestructure/responses/student.response");
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
                .findAll({ raw: true, where: { code, idCycle } });
        });
    }
    reportStudentsForCycle(idCycle) {
        return __awaiter(this, void 0, void 0, function* () {
            const reports = [];
            const students = yield this.findStudentsByCycle(idCycle);
            yield Promise.all(students.map((student) => __awaiter(this, void 0, void 0, function* () {
                const report = new student_response_1.StudentReponse();
                const attendances = yield this
                    .attendanceUseCase
                    .findAttendancesByStudent(student.id);
                const { id, code, names, idCycle } = student;
                report.build({ id, code, names, idCycle, attendances });
                reports.push(report);
            })));
            return reports;
        });
    }
    reportByStudentAndCycle(codeStudent, cycle) {
        return __awaiter(this, void 0, void 0, function* () {
            const reportStudent = new student_response_1.StudentReponse();
            const student = yield this.findStudentByCodeAndCycle(codeStudent, cycle);
            const attendances = yield this
                .attendanceUseCase
                .findAttendancesByStudent(student[0].id);
            const { id, code, names, idCycle } = student[0];
            const counter = {
                numAttendance: 0,
                numFouls: 0,
                numExcuses: 0
            };
            const fnAccumulator = {
                1: () => counter.numAttendance += 1,
                2: () => counter.numFouls += 1,
                3: () => counter.numExcuses += 1
            };
            attendances.forEach(attendance => fnAccumulator[attendance.attended]());
            reportStudent.build(Object.assign(Object.assign({ id, code, names, idCycle }, counter), { attendances }));
            return reportStudent;
        });
    }
}
exports.StudentUseCase = StudentUseCase;
//# sourceMappingURL=student.usecase.js.map