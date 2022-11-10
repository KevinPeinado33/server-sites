import { Repository } from 'sequelize-typescript'
import { StudentModel } from '../../domain/model/student.model';

export class StudentUseCase {
    
    constructor(
        private readonly repository: Repository< StudentModel >
    ) { }


    async findStudentsByCycle(idCycle: number) {
        return await this
                        .repository
                        .findAll({ where: { idCycle }})
    }

}