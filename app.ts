import dotenv from 'dotenv'

import Server from './src/configuration/server/server'

dotenv.config()

const server = new Server()
server.listen()