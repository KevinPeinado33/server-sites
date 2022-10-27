import express, { Application } from 'express'

import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

import db from '../database/connection'
import { options } from '../swagger/swagger'

import userRoutes from '../../user/infraestructure/router/user.router'
import authRoutes from '../../user/infraestructure/router/auth.router'
import ejeRoutes  from '../../user/infraestructure/router/eje.router'

export class Server {

    private PATH_SWAGGER = '/api-docs'

    private app : Application
    private port: string

    private paths = {
        auth: '/api/auth',
        user: '/api/users',
        eje:  '/api/ejes'
    }

    constructor() {
        this.app  = express()
        this.port = process.env.PORT || '8000'

        this.dbConnection()
        this.middlewares()
        this.routes()
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`🎯 Server is already on port: ${this.port}`)
        })
    }

    routes() {
        this.app.use(this.paths.user, userRoutes)
        this.app.use(this.paths.auth, authRoutes)
        this.app.use(this.paths.eje,  ejeRoutes)
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(
            this.PATH_SWAGGER, 
            swaggerUI.serve, 
            swaggerUI.setup(swaggerJSDoc( options ))
        )

        console.log(`🚛 Swagger is already on: http://localhost:${this.port}${this.PATH_SWAGGER}`)

    }

    async dbConnection() {
        try {
            await db.authenticate()
            console.log('DB is online!')
        } catch(error: any) {
            throw new Error(error)
        }
    }

}