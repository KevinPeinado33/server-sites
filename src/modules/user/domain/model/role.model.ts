import {
    Model,
    Column, 
    DataType, 
    Table,
    PrimaryKey,
    AutoIncrement
} from 'sequelize-typescript'

@Table({
    timestamps: false,
    tableName: 'rol'
})
export class RoleModel extends Model{

    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        field: 'id_rol'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name!: string

}