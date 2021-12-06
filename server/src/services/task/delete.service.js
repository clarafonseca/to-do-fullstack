/* eslint-disable no-restricted-globals */
const { tasksRepository } = require('../../repositories');
const { messages } = require('../../utils');

module.exports.deleteTask = async (id) => {
  if (!id || isNaN(id)) {
    throw Object.assign(new Error(messages.invalidFields), {
      status: 404,
    });
  }

  const task = await tasksRepository.getById(id);

  if (!task) {
    throw Object.assign(new Error(messages.notFound('task')), {
      status: 404,
    });
  }

  tasksRepository.destroy(id);
};
