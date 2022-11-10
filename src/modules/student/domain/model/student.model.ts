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
    tableName: 'student'
})
export class StudentModel extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        field: 'stutend_id'
    })
    id?: number

    code!: string

    names!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'id_cycle'
    })
    idCycle!: number

}