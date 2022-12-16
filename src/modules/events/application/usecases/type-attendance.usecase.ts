import { Repository } from 'sequelize-typescript'

import { TypeAttendanceModel } from '../../domain/model/type-attendance.model'

export class TypeAttendanceUseCase {
    
    constructor(
        private readonly typeRepository: Repository<TypeAttendanceModel>
    ){ }

    async getAllTypesAttendance() {
        return await this.typeRepository.findAll({ raw: true })
    }

}