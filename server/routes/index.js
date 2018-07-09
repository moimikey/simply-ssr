import express from 'express'
import debug from './debug'
import routerRenderer from './router-renderer'
import { IS_DEBUG } from '../helpers/config'

const router = express.Router()

router.use('/', routerRenderer)

if (IS_DEBUG) {
  router.use('/', debug)
}

export default router
