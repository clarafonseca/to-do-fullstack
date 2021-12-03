const { TaskList } = require('../models');

module.exports = {
  list: (query) => TaskList.findAndCountAll(query),
  getById: (id) => TaskList.findByPk(id),
  get: (params) => TaskList.findOne({ where: params }),
  create: (params) => TaskList.create(params),
  update: (taskList) => taskList.save(),
  destroy: (id) => TaskList.destroy({ where: { id } }),
};
