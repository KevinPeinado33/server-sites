import { Repository } from 'sequelize-typescript'

import { StudentModel } from '../../domain/model/student.model'
import { AttendanceUseCase } from './attendance.usecase'
import { StudentReponse } from '../../infraestructure/responses/student.response'

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
                        .findAll({ raw: true, where: { code, idCycle }})
    }

    async reportStudentsForCycle(idCycle: number) {

        const reports: StudentReponse[] = []
        const students                  = await this.findStudentsByCycle( idCycle )
        
        await Promise.all(
            students.map( async student => {

                const report      = new StudentReponse()      
                const attendances = await this
                                            .attendanceUseCase
                                            .findAttendancesByStudent( student.id! )
                
                const { id, code, names, idCycle } = student

                report.build({ id, code, names, idCycle, attendances })

                reports.push ( report )
            
            })
        )

        return reports

    }

    async reportByStudentAndCycle(codeStudent: string, cycle: number) {

        const reportStudent  = new StudentReponse()

        const student        = await this.findStudentByCodeAndCycle( codeStudent, cycle )
        const attendances    = await this
                                        .attendanceUseCase
                                        .findAttendancesByStudent( student[ 0 ].id! )

        const { 
            id, 
            code, 
            names, 
            idCycle 
        }                    = student[ 0 ]

        const counter        = {
            numAttendance: 0,
            numFouls:      0,
            numExcuses:    0
        }

        const fnAccumulator  = {
            1: () => counter.numAttendance += 1,
            2: () => counter.numFouls      += 1,
            3: () => counter.numExcuses    += 1
        }

        attendances.forEach( attendance => fnAccumulator[ attendance.attended as keyof typeof fnAccumulator ]() )

        reportStudent.build({ id, code, names, idCycle, ...counter, attendances })

        return reportStudent

    }

}

