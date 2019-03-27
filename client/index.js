
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import io from 'socket.io-client'
import App from './modules/App'

const socket = io.connect('/')

socket.on('connect', function onWSConnected () {
  console.log('Connected to ws server.')
})

socket.emit('hello world!')

const element = document.getElementById('app')

const app = (
  <Router>
    <App path='/' default />
  </Router>
)

if (process.env.NODE_ENV !== 'debug') {
  ReactDOM.hydrate(app, element)
} else {
  ReactDOM.render(app, element)
}

if (module.hot) {
  module.hot.accept()
}
