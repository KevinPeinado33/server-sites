import { Repository } from 'sequelize-typescript'

import { AttendanceModel } from '../../domain/model/attendance.model'

export class AttendanceUseCase {
    
    constructor(
        private readonly repository: Repository< AttendanceModel >
    ) {}

    async createAttendanceByStudent(attendance: AttendanceModel) {
       return await this.repository.create({ ...attendance })
    }

}