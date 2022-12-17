"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *      EventAttendance:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: Nombre de
 *              ep:
 *                  type: string
 *                  description: que chch será ep
 *              location:
 *                  type: string
 *                  description: lugar en donde se hará
 *              date:
 *                  type: string
 *                  description: fecha
 *              startTime:
 *                  type: string
 *                  description: a que hora inicia
 *              endTime:
 *                  type: string
 *                  description: a que hora termina
 *              semesterId:
 *                  type: s
 *                  description: semestre al cual se está adjuntando
 *              attendanceType:
 *                  type: number
 *                  description: tipo de evento
 *          required:
 *              - name
 *              - ep
 *              - location
 *              - date
 *              - startTime
 *              - endTime
 *              - semesterId
 *              - attendanceType
 *          example:
 *              name: Prueba de evento
 *              ep: No se
 *              location: La upiu p
 *              date: 12/12/2022
 *              startTime: 12:50 pm
 *              endTime: 6:00 pm
 *              semesterId: 2
 *              attendanceType: 1
 *
 */
/**
 * @swagger
 * /api/events/get-all:
 *  get:
 *      summary: Lista de eventos creados
 *      tags: [ Events ]
 *      responses:
 *          200:
 *              description: Lista de eventos creados correctitos
 */
/**
 * @swagger
 * /api/events/get-type-events:
 *  get:
 *      summary: Lista de tipo eventos creados
 *      tags: [ Events ]
 *      responses:
 *          200:
 *              description: Lista de tipo eventos creados correctitos
 */
/**
 * @swagger
 * /api/events/create:
 *  post:
 *      summary: Creacion de nuevo evento por ciclo y tipo
 *      tags: [ Events ]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/EventAttendance'
 *      responses:
 *          201:
 *              description: Evento creado correctamente!
 *          500:
 *              description: Error con el server p
 */
/**
 * @swagger
 * /api/events/update:
 *  put:
 *      summary: Actualización de evento por ciclo y tipo
 *      tags: [ Events ]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/EventAttendance'
 *      responses:
 *          201:
 *              description: Evento creado correctamente!
 *          500:
 *              description: Error con el server p
 */
//# sourceMappingURL=event-attendance.documentation.js.map