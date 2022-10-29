import { 
    Model,
    Table,
    Column,
    DataType,
    PrimaryKey,
    AutoIncrement,
} from 'sequelize-typescript'

import { SubAxeModel } from './sub-axe.model'

@Table({
    timestamps: false,
    tableName: 'academic_axes'
})
export class AxeModel extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
        primaryKey: true,
        field: 'id_academic_axe'
    })
    id?: number
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'academic_axe'
    })
    name!: string

    subAxes?: SubAxeModel[]

}