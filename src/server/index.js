if (process.env.NODE_ENV !== 'production') {
  require('@babel/register')
}

const path = require('path')
const React = require('react')
const ReactDOM = require('react-dom/server')
const Reach = require('@reach/router')
const server = require('server')
const debug = require('debug')('app:server')
const HeadProvider = require('react-head').HeadProvider

const config = require('../../config')

const App = require('../client/modules/Application').Application
const generateHtml = require('./generateHTML').generateHtml

const { get, error } = server.router
const { status } = server.reply
const { modern } = server.utils

const markup = ReactDOM.renderToString(
  <HeadProvider headTags={config.headTags}>
    <Reach.ServerLocation url='/'>
      <App />
    </Reach.ServerLocation>
  </HeadProvider>
)

const routes = [
  get('/', ctx => status(200).send(
    generateHtml(markup, '#root', config.headTags)
  ))
]

const middleware = [
  get(ctx => status(404).send('404')),
  error(ctx => status(500).send(ctx.error.message)),
]

server(config.server, [
  routes,
  middleware,
]).then(ctx => {
  debug(`Server launched on http://localhost:${ctx.options.port}/`)
})
