import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Router } from '@reach/router'
import { HeadProvider } from 'react-head'
import { Application } from './modules/Application'

const config = require('../../config')
const debug = require('debug')('app:client')

const rootEl = document.getElementById('root')

const App = (
  <HeadProvider>
    <Router>
      <Application path='/' />
    </Router>
  </HeadProvider>
)

// global.localStorage.debug = '*'

if (process.env.NODE_ENV === 'development') {
  try {
    ReactDOM.render(App, rootEl)
  } catch (error) {
    debug('failed to hydrate application')
    debug(error)
  }
} else {
  try {
    ReactDOM.hydrate(App, rootEl)
  } catch (error) {
    debug('failed to render application')
    debug(error)
  }
}

if (module.hot) {
  module.hot.accept()
}
