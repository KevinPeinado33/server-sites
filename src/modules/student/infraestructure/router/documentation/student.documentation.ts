/**
 * @swagger
 * components:
 *  schemas:
 *      Student:
 *          type: object
 *          properties:
 *              code:
 *                  type: string
 *                  description: Codigo estudiantil
 *              names:
 *                  type: string
 *                  description: Nombre completo del estudiante
 *              idCycle:
 *                  type: number
 *                  description: Id del ciclo al cual pertenece
 *          required:
 *              - code
 *              - names
 *              - idCycle
 *          example:
 *              code: 20176661
 *              names: Alumno prueba
 *              idCycle: 20
 *          
 */

/**
 * @swagger
 * components:
 *  schemas:
 *      Attendance:
 *          type: object
 *          properties:
 *              attended:
 *                  type: number
 *                  description: 1 asisitio, 2 falto, 3 justificado
 *              date:
 *                  type: Date
 *                  description: Fecha en la que asistió
 *              idStudent:
 *                  type: number
 *                  description: Id del estudiante a registrar
 *          required:
 *              - attended
 *              - date
 *              - idStudent
 *          example:
 *              attended: 1
 *              date: 2022/11/10
 *              idStudent: 3
 *          
 */

/**
 * @swagger
 * /api/students/get-by-cycle/{id}:
 *  get:
 *      summary: Busqueda de los alumnos por ciclo
 *      tags: [ Students ]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: number
 *              required: true
 *      responses:
 *          200:
 *              description: List de todos Busqueda de los alumnos por ciclo
 */

/**
 * @swagger
 * /api/students/create:
 *  post:
 *      summary: Creacion de nuevo estudiante con su respectivo ciclo
 *      tags: [ Students ]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Student'
 *      responses:
 *          201:
 *              description: Estudiante creado correctamente!
 *          500:
 *              description: Error con el server
 */

/**
 * @swagger
 * /api/students/register-attendance:
 *  post:
 *      summary: Registrar asistencia del alumno
 *      tags: [ Students ]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/Attendance'
 *      responses:
 *          201:
 *              description: Asistencia registrada correctamente!
 *          500:
 *              description: Error con el server
 */

/**
 * @swagger
 * /api/students/reports-by-cycle/{id}:
 *  get:
 *      summary: Reporte de alumnos por ciclo academico
 *      tags: [ Students ]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: number
 *              required: true
 *      responses:
 *          200:
 *              description: Report de asistencias por alumnos uwu.
 */