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
    tableName: 'sub_academic_axes'
})
export class SubAxeModel extends Model {

    @PrimaryKey
    @AutoIncrement
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        field: 'id_sub_academic_axe'
    })
    id?: number

    @Column({
        type: DataType.STRING,
        allowNull: false,
        field: 'sub_academic_axe'
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
        field: 'id_academic_axe'
    })
    idAxe!: number

    /**
     * Relación recursiva para la misma tabla
     * porque tendra hijos de si mismo.
     */
    @Column({
        type: DataType.NUMBER,
        field: 'id_father'
    })
    idFather!: number

    subAxesChild?: SubAxeModel[]

}