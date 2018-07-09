import express from 'express'
import cache from './cache'
import referrerPolicy from './referrer-policy'

let router = express.Router()

router.use('/cache', cache)
router.use('/referrer-policy', referrerPolicy)

export default router
