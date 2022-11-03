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
    tableName: 'users'
})
export class UserModel extends Model {
    
    @AutoIncrement
    @PrimaryKey
    @Column({
        primaryKey: true,
        field: 'id_user'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email!: string

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password!: string

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        field: 'id_rol'
    })
    idRole!: number

    /* @Column({
        type: DataType.BOOLEAN,
        allowNull: true,
        defaultValue: true
    })
    isActive?: boolean */

}