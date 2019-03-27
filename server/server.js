if (process.env.NODE_ENV !== 'production') {
  require('@babel/register')
}

const fs = require('fs')
const path = require('path')
const spdy = require('spdy')
const app = require('./app').default

const key = fs.readFileSync(path.join(__dirname, 'certificates/server.key'), 'utf8')
const cert = fs.readFileSync(path.join(__dirname, 'certificates/server.cert'), 'utf8')
const server = spdy.createServer({ key, cert }, app)
const io = require('socket.io')(server)
io.on('connection', (socket) => {
  console.log('connection')
})

module.exports = server
