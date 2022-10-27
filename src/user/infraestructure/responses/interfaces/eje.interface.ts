export interface EjeInterface {
    id?:     number
    name:    string
    subEjes?: SubEjeInterface []
}

export interface SubEjeInterface {
    id?:     number
    name:    string
    path:    string
    idEje:   number
    idPadre: number
}