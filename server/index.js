const server = require('./server').default
const port = process.env.PORT || 8000

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
      console.error(`${bind} requires elevated privileges.`)
      return process.exit(1)
    case 'EADDRINUSE':
      console.error(`${bind} is already in use.`)
      return process.exit(1)
    default:
      throw error
  }
}

function onListening () {
  const addr = server.address()
  const bind = typeof addr === 'string'
    ? `pipe ${addr}`
    : `port ${addr.port}`
  console.info(`Listening on ${bind}.`)
}

server.on('error', onError)
server.on('listening', onListening)

process.on('unhandledRejection', (reason, p) => {
  console.error('Unhandled Rejection at:', p, 'reason:', reason)
})

server.listen(port)
