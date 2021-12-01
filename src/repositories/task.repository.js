const { Task } = require('../models')

module.exports = {
  list: (query) => Task.findAndCountAll(query),
  getById: (id) => Task.findByPk(id),
  get: (params) => Task.findOne({ where: params }),
  create: (params) => Task.create(params),
  update: (task) => task.save(),
  destroy: (id) => Task.destroy({ where: { id } })
}
