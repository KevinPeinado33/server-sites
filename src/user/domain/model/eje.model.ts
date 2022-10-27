import { SubEjeModel } from './sub-eje.model';
import { 
    Model,
    Table,
    Column,
    DataType,
    PrimaryKey,
    AutoIncrement,
} from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: 'ejes'
})
export class EjeModel extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
        primaryKey: true,
        field: 'id_eje'
    })
    id?: number
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'eje'
    })
    name!: string

    subEjes?: SubEjeModel[]

}