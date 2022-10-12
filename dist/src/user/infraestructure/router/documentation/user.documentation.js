"use strict";
/**
 * @swagger
 * components:
 *  schemas:
 *      User:
 *          type: object
 *          properties:
 *              names:
 *                  type: string
 *                  description: Nombre completo del usuario
 *              email:
 *                  type: string
 *                  description: Correo electronico con dominio @upeu.edu.pe
 *              userName:
 *                  type: string
 *                  description: Nombre de usuario
 *              password:
 *                  type: string
 *                  description: Password del estudiante, devolverlo encriptado
 *              isActive:
 *                  type: boolean
 *                  description: Al no enviar el valor por defecto se creara con estado activo (true)
 *          required:
 *              - names
 *              - email
 *              - userName
 *              - password
 *          example:
 *              names: Chanchito feliz
 *              email: chanchito@upeu.edu.pe
 *              userName: chanchitofeliz
 *              password: 123456
 *
 */
/**
 * @swagger
 * /api/users/create:
 *  post:
 *      summary: Creacion de nuevo usuario
 *      tags: [ User ]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      $ref: '#/components/schemas/User'
 *      responses:
 *          201:
 *              description: Usuario creado correctamente!
 */
/**
 * @swagger
 * /api/users/get-all:
 *  get:
 *      summary: Todos los usuarios sin exepciones
 *      tags: [ User ]
 *      responses:
 *          200:
 *              description: List de todos los usuarios obtenido
 */ 
//# sourceMappingURL=user.documentation.js.map