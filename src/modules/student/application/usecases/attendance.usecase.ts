import { Repository } from 'sequelize-typescript'

import { AttendanceModel } from '../../domain/model/attendance.model'

export class AttendanceUseCase {
    
    constructor(
        private readonly repository: Repository< AttendanceModel >
    ) {}

    async createAttendance(attendance: AttendanceModel) {
       return await this.repository.create({ ...attendance })
    }

    async findAttendancesByStudent(idStudent: number) {
        return await this
                        .repository
                        .findAll({ raw: true, where: { idStudent } })
    }

}