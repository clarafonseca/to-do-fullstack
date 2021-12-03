const yup = require('yup');
const { tasksRepository, taskListsRepository } = require('../../repositories');
const { messages } = require('../../utils');

module.exports.create = async (body) => {
  const schema = yup.object().shape({
    taskListId: yup.number(),
    name: yup.string().required(),
    concluded: yup.boolean().required(),
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  if (validated.taskListId) {
    const taskList = await taskListsRepository.getById(validated.taskListId);

    if (!taskList) {
      throw Object.assign(new Error(messages.notFound('task-list')), {
        status: 404,
      });
    }
  }

  const taskCreated = await tasksRepository.create(validated);

  return taskCreated;
};
