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
    tableName: 'sub_eje'
})
export class SubEjeModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        field: 'id_sub_eje'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'sub_eje'
    })
    name!: string
    
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    path!: string


    // Relaciones con las otras tablas
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        field: 'id_eje'
    })
    idEje!: number

    /**
     * Relación recursiva para la misma tabla
     * porque tendra hijos.
     */
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        field: 'id_padre'
    })
    idPadre!: number

}