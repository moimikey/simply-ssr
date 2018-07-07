import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import generateHtml from './generateHTML'
import App from '../client/modules/App'

export default (req, res) => {
  const context = {}
  const router = <StaticRouter location={req.originalUrl} context={context}><App /></StaticRouter>
  const markup = ReactDOM.renderToString(router)
  if (context.url) {
    res.redirect(301, context.url)
  } else {
    const html = generateHtml(markup)
    res.send(html)
  }
}
