import { Repository } from 'sequelize-typescript'

import { CycleModel } from '../../domain/model/cycle.model'

export class CycleUseCase {
    
    constructor(
        private readonly repository: Repository< CycleModel >
    ) { }

    async getCyclesBySemester( idSemester: number ) {
        return await this
                        .repository
                        .findAll({ where: { idSemester } })
    }

}