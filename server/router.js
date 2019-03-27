import * as React from 'react'
import * as ReactDOM from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import express from 'express'
import generateHtml from './generateHTML'
import App from '../client/modules/App'

const router = express.Router()

router.get('/', (req, res) => {
  const AppComponent = (
    <ServerLocation url={req.url}>
      <App path='/' default />
    </ServerLocation>
  )

  const markup = ReactDOM.renderToString(AppComponent)
  const html = generateHtml(markup)

  return res.status(200).send(html)
})

export default router
