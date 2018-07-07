import compression from 'compression'
import express from 'express'
import middleware from './middleware'

const app = express()
const port = process.env.PORT || 1234

app.use(compression())

app.use('/dist', express.static(`${__dirname}/../client`))
app.get('/*', middleware)

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})
