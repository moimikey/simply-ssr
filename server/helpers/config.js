import path from 'path'

export const IS_DEBUG = process.env.DEBUG
export const DEFAULT_CONFIG_PATH = path.resolve('server/config/config.json')

const config = require(DEFAULT_CONFIG_PATH)

export default config
