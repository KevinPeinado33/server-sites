/**
 * @swagger
 * /api/academic/get-axes:
 *  get:
 *      summary: Lista de todos los ejes para la administración del navbar
 *      tags: [ Academic ]
 *      responses:
 *          200:
 *              description: List de objetos con sus sub ejes y hijos de los sub ejes
 */

/**
 * @swagger
 * /api/academic/get-semesters:
 *  get:
 *      summary: Lista de todo los ciclos academicos sin importar si ya pasaron.
 *      tags: [ Academic ]
 *      responses:
 *          200:
 *              description: List de objetos con sus sub ejes y hijos de los sub ejes
 */

/**
 * @swagger
 * /api/academic/get-cycles/{id}:
 *  get:
 *      summary: Busqueda de todos los ciclos por semestre
 *      tags: [ Academic ]
 *      parameters:
 *          -   in: path
 *              name: id
 *              schema:
 *                  type: number
 *              required: true
 *      responses:
 *          200:
 *              description: List de todos los ciclos academicos
 */