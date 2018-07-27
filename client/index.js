
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import io from 'socket.io-client'
import App from './modules/App'

const socket = io.connect('/')

socket.on('connect', function onWSConnected () {
  console.log('Connected to ws server.')
})

socket.emit('hello world!')

const element = document.getElementById('app')

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

if (process.env.NODE_ENV !== 'debug') {
  ReactDOM.hydrate(app, element)
} else {
  ReactDOM.render(app, element)
}

if (module.hot) {
  module.hot.accept()
}
