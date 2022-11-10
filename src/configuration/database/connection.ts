import { Sequelize } from 'sequelize-typescript'

import { UserModel } from '../../modules/user/domain/model/user.model'
import { RoleModel } from '../../modules/user/domain/model/role.model'
import { AxeModel } from '../../modules/academic/domain/model/axe.model'
import { SubAxeModel } from '../../modules/academic/domain/model/sub-axe.model'
import { SemesterModel } from '../../modules/academic/domain/model/semester.model'
import { CycleModel } from '../../modules/academic/domain/model/cycle.model'
import { StudentModel } from '../../modules/student/domain/model/student.model'
import { AttendanceModel } from '../../modules/student/domain/model/attendance.model'

const db = new Sequelize({
    repositoryMode: true,
    dialect: 'postgres',
    host: '129.151.123.131',
    username: 'postgres',
    password: '4^fPVa5gCz',
    database: 'postgres',
    /* logging: false, */
    models: [ 
        UserModel,
        RoleModel,
        AxeModel,
        SubAxeModel,
        SemesterModel,
        CycleModel,
        StudentModel,
        AttendanceModel
    ]
})

export default db