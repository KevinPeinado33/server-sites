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
        field: 'student_id'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    code!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    names!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'id_cycle'
    })
    idCycle!: number

}