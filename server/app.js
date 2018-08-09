import path from 'path'
import express from 'express'
import dayjs from 'dayjs'
import bodyParser from 'body-parser'
import { assetLocals, viewLocals } from './middlewares/locals'
import assets from './middlewares/assets'
import caching from './middlewares/caching'
import compression from './middlewares/compression'
import cookies from './middlewares/cookies'
import csrf from './middlewares/csrf'
import error403 from './middlewares/errors/403'
import error404 from './middlewares/errors/404'
import error500dev from './middlewares/errors/500.dev'
import error500prod from './middlewares/errors/500.prod'
import logger from './middlewares/logger'
import refererAndOrigin from './middlewares/referer-origin'
import routes from './routes'
import security from './middlewares/security'
import session from './middlewares/session'
import { IS_DEBUG } from './helpers/config'

const PUBLIC_FOLDER = path.join(__dirname, '../client')
let app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// global variables
app.locals.dayjs = dayjs
app.locals.moment = dayjs

// favicon
// app.use(favicon(path.join(PUBLIC_FOLDER, 'favicon.ico')))

// logger
app.use(logger)
// gzip, brotli compression pre-compressed-assets
compression(app, PUBLIC_FOLDER)
// assets folder and caching
assets(app, PUBLIC_FOLDER)
// assets locals
app.use(assetLocals)
// JSON body
app.use(bodyParser.json())
// application/x-www-form-urlencoded body
app.use(bodyParser.urlencoded({ extended: false }))
// caching
caching(app)
// security - helmet
security(app)
// cookies
app.use(cookies)
// session
app.use(session)
// referer and origin validation
app.use(refererAndOrigin)
// CSRF
app.use(csrf)
// request variables
app.use(viewLocals)
// routes
app.use('/', routes)

// catch CSRF and authorization errors
app.use(error403)
// catch 404 and forward to error handler
app.use(error404)
// catch 500 errors
if (IS_DEBUG) {
  app.use(error500dev)
} else {
  app.use(error500prod)
}

export default app
