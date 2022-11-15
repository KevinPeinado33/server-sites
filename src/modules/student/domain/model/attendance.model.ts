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
    tableName: 'attendance_reports_activate'
})
export class AttendanceModel extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        field: 'id_attendace_activate'
    })
    id?: number

    @Column({
        type: DataType.NUMBER,
        allowNull: false
    })
    attended!: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    date!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'student_id'
    })
    idStudent!: number

}