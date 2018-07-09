// import os from 'os'
// import path from 'path'
import { createLogger, format, transports } from 'winston'
// import { IS_DEBUG } from './config'

const { combine, timestamp, printf, colorize } = format

// const LOGS_FOLDER = path.join(__dirname, '..', 'logs')

const isSecret = /super secret/
const filterSecret = format((info, opts) => {
  info.message = info.message.replace(isSecret, 'su*** se****')
  return info
})

const logger = createLogger({
  format: combine(
    timestamp(),
    colorize(),
    filterSecret(),
    printf(nfo => {
      return `  \u001b[32mdebug\u001b[39m:${nfo.level} ${nfo.message}`
    })
  ),
  transports: [
    new transports.Console()
    // new transports.File({
    //   name: '1',
    //   filename: path.join(LOGS_FOLDER, 'web.log'),
    //   level: IS_DEBUG ? 'silly' : 'info',
    //   json: false,
    //   maxsize: 5242880, // 5MB
    //   maxFiles: -1,
    //   colorize: false,
    //   eol: os.eol,
    //   tailable: true
    // }),
    // new transports.File({
    //   name: '2',
    //   filename: path.join(LOGS_FOLDER, 'errors.log'),
    //   level: 'error'
    // })
  ],
  exceptionHandlers: [
    new transports.Console()
  //   new transports.File({
  //     filename: path.join(LOGS_FOLDER, 'exceptions.log'),
  //     json: false,
  //     humanReadableUnhandledException: true
  //   })
  ]
})

export default logger
