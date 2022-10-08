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
    tableName: 'tb_users'
})
export class UserModel extends Model {
    
    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true
    })
    id?: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    names!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string
    
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    userName!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string

    @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    })
    isActive?: boolean

}