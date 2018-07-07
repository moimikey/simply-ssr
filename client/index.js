
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './modules/App'

console.log('Hello world.')

const element = document.getElementById('app')
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

if (process.env.NODE_ENV === 'production') {
  ReactDOM.hydrate(app, element)
} else {
  ReactDOM.render(app, element)
}

if (module.hot) {
  module.hot.accept()
}
