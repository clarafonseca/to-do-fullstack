/* eslint-disable no-restricted-globals */
const { taskListsRepository } = require('../../repositories');
const { messages } = require('../../utils');

module.exports.deleteTaskList = async (id) => {
  if (!id || isNaN(id)) {
    throw Object.assign(new Error(messages.invalidFields), {
      status: 404,
    });
  }

  const taskList = await taskListsRepository.getById(id);

  if (!taskList) {
    throw Object.assign(new Error(messages.notFound('task-list')), {
      status: 404,
    });
  }

  taskListsRepository.destroy(id);
};
