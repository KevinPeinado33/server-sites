import { Repository } from 'sequelize-typescript'

import { AxeModel } from '../../domain/model/axe.model'
import { SubAxeModel } from '../../domain/model/sub-axe.model'

export class AxeUseCase {

    constructor(
        private readonly axeRepository: Repository<AxeModel>,
        private readonly subAxeRepository: Repository<SubAxeModel>
    ) { }

    async getAllAxesAndSubAxes() {
        
        const resultsAxe = await this.axeRepository.findAll({ raw: true })

        return await Promise.all( resultsAxe.map( async axe => {
                
            const resultsSubAxe = await this.getSubAxesByIdAxe( axe.id! )

            await Promise.all( resultsSubAxe.map( async subAxe => {

                const resultsChildSubAxe = await this.getSubAxesByFather( subAxe.id! )

                subAxe.subAxesChild = resultsChildSubAxe

                return subAxe

            }))

            axe.subAxes = resultsSubAxe

            return axe

        }))

    }

    async getSubAxesByIdAxe(idAxe: number) {
        return await this
                        .subAxeRepository
                        .findAll({ raw: true, where: { idAxe, idFather: null } })
    }

    async getSubAxesByFather(idFather: number) {
        return await this
                        .subAxeRepository
                        .findAll({ raw: true, where: { idFather }})
    }

}