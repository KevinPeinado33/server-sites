import { Repository } from 'sequelize-typescript'

import { StudentModel } from '../../domain/model/student.model'
import { AttendanceModel } from '../../domain/model/attendance.model'
import { AttendanceUseCase } from './attendance.usecase'

export class StudentUseCase {
    
    constructor(
        private readonly repository: Repository< StudentModel >,
        private readonly attendanceUseCase: AttendanceUseCase
    ) { }


    async findStudentsByCycle(idCycle: number) {
        return await this
                        .repository
                        .findAll({ raw: true, where: { idCycle }})
    }

    async createStudent(student: StudentModel) {
        return await this.repository.create({ ...student })
    }

    async findStudentByCodeAndCycle(code: string, idCycle: number) {
        return await this
                        .repository
                        .findAll({ where: { code, idCycle }})
    }

    async reportStudentsForCycle(idCycle: number) {

        const reports: StudentReponse[] = []
        const studends                  = await this.findStudentsByCycle( idCycle )
        
        await Promise.all(
            studends.map( async student => {

                const report      = new StudentReponse()      
                const attendances = await this
                                            .attendanceUseCase
                                            .findAttendancesByStudent( student.id! )
                
                const { id, code, names, idCycle } = student

                report.build( id!, code, names, idCycle, attendances )

                reports.push ( report )
            
            })
        )

        return reports

    }

}

class StudentReponse {

    id?:          number
    code!:        string
    names!:       string
    idCycle!:     number
    attendances!: AttendanceModel[]

    constructor() {}

    build(id: number, code: string, names: string, idCycle: number, attendances: AttendanceModel[]) {
        this.id          = id
        this.code        = code
        this.names       = names
        this.idCycle     = idCycle
        this.attendances = attendances
    }

}