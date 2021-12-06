const { create } = require('./create.service');
const { read } = require('./read.service');
const { update } = require('./update.service');
const { deleteTaskList } = require('./delete.service');
const { list } = require('./list.service');

module.exports = {
  create,
  read,
  update,
  deleteTaskList,
  list,
};
