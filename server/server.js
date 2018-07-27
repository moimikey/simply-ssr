import fs from 'fs'
import path from 'path'
import http from 'spdy'
import app from './app'

const key = fs.readFileSync(path.join(__dirname, 'certificates/server.key'), 'utf8')
const cert = fs.readFileSync(path.join(__dirname, 'certificates/server.cert'), 'utf8')
const server = http.createServer({ key, cert }, app)
const io = require('socket.io')(server)

io.on('connection', (socket) => {
  console.log('connection')
})

export default server
