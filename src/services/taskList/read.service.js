const { taskListsRepository } = require('../../repositories');
const { messages } = require('../../utils');

module.exports.read = async (id) => {
  const taskList = await taskListsRepository.getById(id);

  if (!taskList) {
    throw Object.assign(new Error(messages.notFound('task-list')), {
      status: 404,
    });
  }

  return taskList;
};
