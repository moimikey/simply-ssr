import * as path from 'path'
import * as fs from 'fs'
import * as React from 'react'
import express from 'express'
import Helmet from 'react-helmet'
import cheerio from 'cheerio'
import { StaticRouter } from 'react-router'
import { renderToString } from 'react-dom/server'
import App from '../../client/modules/App'

const router = express.Router()

router.get('/', (req, res) => {
  const renderDocumentToString = props => {
    const templatePath = path.join(__dirname, '..', 'client', 'index.html')
    const HTML_TEMPLATE = fs.readFileSync(templatePath).toString()
    const helmet = props.helmet
    const $template = cheerio.load(HTML_TEMPLATE)
    $template('head').append(helmet.title.toString() + helmet.meta.toString() + helmet.link.toString())
    $template('#app').html(props.html)
    return $template.html()
  }

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
  const nonce = res.locals.nonce
  const helmet = Helmet.renderStatic()
  const html = renderToString(AppComponent)

  return res.status(status).send(
    renderDocumentToString({
      helmet,
      nonce,
      encodedNonce: Buffer.from(nonce).toString('base64'),
      html
    })
  )
})

export default router
