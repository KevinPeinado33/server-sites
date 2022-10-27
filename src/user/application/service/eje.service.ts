import { EjeModel } from '../../domain/model/eje.model'
import { SubEjeModel } from '../../domain/model/sub-eje.model'

export interface EjeServiceInterface {

    getAllEjes(): Promise< EjeModel[]  | void[] >
    getSubEjesByIdEje( idEje: number ): Promise< SubEjeModel[] >
    
}