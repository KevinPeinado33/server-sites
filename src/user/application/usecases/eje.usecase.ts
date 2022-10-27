import { Repository } from 'sequelize-typescript'

import { EjeModel } from '../../domain/model/eje.model'
import { SubEjeModel } from '../../domain/model/sub-eje.model'
import { EjeServiceInterface } from '../service/eje.service'

export class EjeUseCase implements EjeServiceInterface {

    constructor(
        private readonly ejeRepository: Repository< EjeModel >,
        private readonly subRepository: Repository< SubEjeModel >
    ) {  }

    async getAllEjes(): Promise<EjeModel[]> {

        const results = await this.ejeRepository.findAll()

        results.map( async ( eje ) => {
            
            const resultsSub = await this.getSubEjesByIdEje( eje.id! )
            
            eje.subEjes! = [ ...resultsSub ]
            
            console.log(results)
            
        })
        
        for (let i = 0; i < results.length; i++) {
            
            const resultsSub = await this.getSubEjesByIdEje( results[i].id! )
            
            results[i].subEjes = resultsSub
        
        }

        return results

    }

    async getSubEjesByIdEje(idEje: number): Promise<SubEjeModel[]> {
        return await this.subRepository.findAll({ where: { idEje } })
    }

}