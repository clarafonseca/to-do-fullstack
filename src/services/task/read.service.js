const { tasksRepository } = require('../../repositories');
const { messages } = require('../../utils');

module.exports.read = async (id) => {
  const task = await tasksRepository.getById(id);

  if (!task) {
    throw Object.assign(new Error(messages.notFound('task')), {
      status: 404,
    });
  }

  return task;
};
