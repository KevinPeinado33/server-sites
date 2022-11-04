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
    tableName: 'semesters'
})
export class SemesterModel extends Model {

    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        field: 'semester_id'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    semester!: string

}