import morgan from 'morgan'
import logger from '../helpers/logger'
import { IS_DEBUG } from '../helpers/config'

let stream = {
  write (message /* , encoding */) {
    logger.info(message.slice(0, -1))
  }
}

export default morgan(IS_DEBUG ? 'common' : 'combined', { stream })
