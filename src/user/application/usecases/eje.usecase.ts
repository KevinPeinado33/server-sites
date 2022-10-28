import { Repository } from 'sequelize-typescript'

import { EjeModel } from '../../domain/model/eje.model'
import { SubEjeModel } from '../../domain/model/sub-eje.model'
import { EjeServiceInterface } from '../service/eje.service'

export class EjeUseCase implements EjeServiceInterface {

    constructor(
        private readonly ejeRepository: Repository< EjeModel >,
        private readonly subRepository: Repository< SubEjeModel >
    ) {  }

    async getAllEjes(): Promise< EjeModel[] | any[] > {

        const results = await this.ejeRepository.findAll()

        const ejes = await Promise.all(
            
            results.map( async ( eje ) => {

                const resultsSub = await this.getSubEjesByIdEje( eje.id! )

                const obj = { ...eje }
                
                obj.subEjes = resultsSub

                return obj
            
            })
        )

        return ejes

    }

    async getSubEjesByIdEje(idEje: number): Promise<SubEjeModel[]> {
        return await this.subRepository.findAll({ where: { idEje } })
    }

}