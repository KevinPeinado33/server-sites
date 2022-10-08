import express, { Application } from 'express'
import cors from 'cors'

import db from '../database/connection'
import userRoutes from '../../user/infraestructure/router/user.router'

class Server {

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
            console.log(`Server is already on port: ${this.port}`)
        })
    }

    routes() {
        this.app.use(this.paths.user, userRoutes)
    }

    middlewares() {
        this.app.use(cors())
        this.app.use(express.json())
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

export default Server