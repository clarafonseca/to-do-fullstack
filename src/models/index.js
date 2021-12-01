const Sequelize = require('sequelize')
const config = require('../config/database/sequelize')
const Task = require('./task')


const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
)

module.exports = {
  sequelize,
  Task,
}
