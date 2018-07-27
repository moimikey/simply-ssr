import express from 'express'
import compression from 'compression'
import router from './router'

const app = express()

app.use(compression())
app.use(express.static(__dirname))
app.use('*', router)

export default app
