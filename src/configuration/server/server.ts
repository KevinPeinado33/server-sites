import express, { Application } from 'express'
import cors from 'cors'
import swaggerUI from 'swagger-ui-express'
import swaggerJSDoc from 'swagger-jsdoc'

import db from '../database/connection'
import userRoutes from '../../user/infraestructure/router/user.router'
import { options } from '../documentation/swagger'

export class Server {

    private app : Application
    private port: string

    private paths = {
        user: '/api/users'
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
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
        this.app.use(
            '/api-docs', 
            swaggerUI.serve, 
            swaggerUI.setup(swaggerJSDoc( options ))
        )
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