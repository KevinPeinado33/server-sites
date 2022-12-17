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
    tableName: 'event_attendance'
})
export class EventAttendanceModel extends Model {
    
    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        field: 'id_event_attendance'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'event_attendance'
    })
    name!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    ep!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location!: string
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    date!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'time_ini'
    })
    startTime!: string

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'time_end'
    })
    endTime!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'semester_id'
    })
    semesterId!: number

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'id_attendance_type'
    })
    attendanceType!: number

}