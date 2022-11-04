import { Repository } from 'sequelize-typescript'
import { SemesterModel } from '../../domain/model/semester.model';

export class SemesterUseCase {
    
    constructor(
        private readonly repository: Repository< SemesterModel >
    ) { }

    async findSemesters() {
        return await this.repository.findAll({ raw: true })
    }

}