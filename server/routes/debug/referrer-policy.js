import express from 'express'
let router = express.Router()

router.get('/', (req, res) => {
  res.render('debug/referrer-policy')
})

export default router
