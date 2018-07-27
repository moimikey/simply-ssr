import * as React from 'react'
import * as ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import express from 'express'
import generateHtml from './generateHTML'
import App from '../client/modules/App'

const router = express.Router()

router.get('/', (req, res) => {
  const staticContext = {}

  const AppComponent = (
    <StaticRouter location={req.path} context={staticContext}>
      <App />
    </StaticRouter>
  )

  if (staticContext.url) {
    return res.redirect(301, staticContext.url)
  }

  const status = staticContext.status === '404' ? 404 : 200
  const markup = ReactDOM.renderToString(AppComponent)
  const html = generateHtml(markup)

  return res.status(status).send(html)
})

export default router
