"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentReponse = void 0;
class StudentReponse {
    constructor() { }
    build({ id, code, names, idCycle, numAttendance, numFouls, numExcuses, attendances }) {
        this.id = id;
        this.code = code;
        this.names = names;
        this.idCycle = idCycle;
        this.numAttendance = numAttendance;
        this.numFouls = numFouls;
        this.numExcuses = numExcuses;
        this.attendances = attendances;
    }
}
exports.StudentReponse = StudentReponse;
//# sourceMappingURL=student.response.js.map