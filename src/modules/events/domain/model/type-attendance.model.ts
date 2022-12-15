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
    tableName: 'attendance_type'
})
export class TypeAttendanceModel extends Model {
    
    @PrimaryKey
    @AutoIncrement
    @Column({
        primaryKey: true,
        field: 'id_attendance_type'
    })
    id?: number
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'attendance_type'
    })
    name!: string

}