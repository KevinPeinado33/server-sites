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
 * /api/users/sign-in:
 *  post:
 *      summary: Logeo de usuario que retorna un token de JWT
 *      tags: [ User ]
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          email:
 *                              type: string
 *                          passw:
 *                              type: string
 *      responses:
 *          200:
 *              description: Devuelve el usuario completo con el token generado.
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
 *      parameters:
 *          -   name: x-token
 *              in: header
 *              description: Token de autorización
 *              type: string
 *              required: tru
 *      responses:
 *          201:
 *              description: Usuario creado correctamente!
 *          500:
 *              description: Error con el server
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
/**
 * @swagger
 * /api/users/get-nati:
 *  get:
 *      summary: consulta nativa
 *      tags: [ User ]
 *      responses:
 *          200:
 *              description: List de todos los usuarios obtenido
 */
/**
 * @swagger
 * /api/users/buscar/{id}:
 *  get:
 *      summary: buscar usuario por el id
 *      tags: [ User ]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: number
 *              required: true
 *      responses:
 *          200:
 *              description: buscada de usuario por el id
 */ 
//# sourceMappingURL=user.documentation.js.map