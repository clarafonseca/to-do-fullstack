const yup = require('yup');
const { messages } = require('../../utils');
const { tasksRepository, taskListsRepository } = require('../../repositories');

module.exports.update = async (id, body) => {
  const schema = yup.object().shape({
    id: yup.number().required(),
    taskListId: yup.number(),
    name: yup.string(),
    concluded: yup.boolean(),
  });

  const validated = await schema.validate({ ...{ id }, ...body }, {
    stripUnknown: true,
  });

  const task = await tasksRepository.getById(validated.id);

  if (!task) {
    throw Object.assign(new Error(messages.notFound('task')), {
      status: 404,
    });
  }

  if (validated.taskListId) {
    const taskList = await taskListsRepository.getById(validated.taskListId);

    if (!taskList) {
      throw Object.assign(new Error(messages.notFound('task-list')), {
        status: 404,
      });
    }
  }

  Object.keys(validated).forEach((key) => {
    task.setDataValue(key, validated[key]);
  });

  const updatedTask = await tasksRepository.update(task);

  return updatedTask;
};
