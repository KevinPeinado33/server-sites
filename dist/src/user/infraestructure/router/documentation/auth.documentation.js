"use strict";
/**
 * @swagger
 * /api/auth/sign-in:
 *  post:
 *      summary: Logeo de usuario que retorna un token de JWT
 *      tags: [ Auth ]
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
//# sourceMappingURL=auth.documentation.js.map