import fs from 'fs'
import http from 'spdy'
import path from 'path'
import app from './app'
import logger from './helpers/logger'

const key = fs.readFileSync(path.join(__dirname, 'certificates/server.key'), 'utf8')
const cert = fs.readFileSync(path.join(__dirname, 'certificates/server.cert'), 'utf8')
const server = http.createServer({ key, cert }, app)

server.on('error', onError)
server.on('listening', onListening)

process.on('unhandledRejection', (reason, p) => {
  logger.error('Unhandled Rejection at:', p, 'reason:', reason)
})

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  let addr = server.address()
  let bind = typeof addr === 'string'
    ? `Pipe ${addr}`
    : `Port ${addr.port}`

  switch (error.code) {
    case 'EACCES':
      logger.error(`${bind} requires elevated privileges.`)
      return process.exit(1)
    case 'EADDRINUSE':
      logger.error(`${bind} is already in use.`)
      return process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  let addr = server.address()
  let bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`
  logger.info(`Listening on ${bind}.`)
}

export default server
