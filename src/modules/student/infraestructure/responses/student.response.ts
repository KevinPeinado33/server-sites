import { AttendanceModel } from '../../domain/model/attendance.model'

interface StudentInterface {
    id?:            number, 
    code:           string, 
    names:          string, 
    idCycle:        number,
    numAttendance?: number,
    numFouls?:      number,
    numExcuses?:    number,
    attendances:    AttendanceModel[]
}

export class StudentReponse {

    id?:            number
    code!:          string
    names!:         string
    idCycle!:       number
    numAttendance?: number
    numFouls?:      number
    numExcuses?:    number
    attendances!:   AttendanceModel[]

    constructor() {}

    build({
        id, 
        code, 
        names, 
        idCycle,
        numAttendance,
        numFouls,
        numExcuses,
        attendances
    }: StudentInterface) {
        this.id            = id
        this.code          = code
        this.names         = names
        this.idCycle       = idCycle
        this.numAttendance = numAttendance
        this.numFouls      = numFouls
        this.numExcuses    = numExcuses
        this.attendances   = attendances
    }

}