const express = require('express')
const cors = require('cors')
const routes = require('../../routes')
const { logger } = require('../../utils')
require('dotenv').config()

const app = express()

app.set('port', process.env.PORT || 3000)
app.use(cors())
app.use(express.json())

Object.keys(routes).forEach(key => app.use(`/${key}`, routes[key]))

process.on('uncaughtException', (err, origin) => {
  logger.error(
    `Caught exception: ${err.message}\n` +
      `Exception origin: ${origin}` +
      `Exception stack: ${err.stack}`
  )
})

process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

module.exports = app
