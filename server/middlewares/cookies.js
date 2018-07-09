import cookieParser from 'cookie-parser'
import config from '../helpers/config'

export default cookieParser(config.secret)
