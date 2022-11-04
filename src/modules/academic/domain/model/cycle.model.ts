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
    tableName: 'cycles'
})
export class CycleModel extends Model {
    
    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        field: 'id_cycle'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    cycle!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'semester_id'
    })
    idSemester!: number

}