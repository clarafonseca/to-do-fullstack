const yup = require('yup');
const { messages } = require('../../utils');
const { taskListsRepository } = require('../../repositories');

module.exports.update = async (id, body) => {
  const schema = yup.object().shape({
    id: yup.number(),
    name: yup.string(),
  });

  const validated = await schema.validate({ ...{ id }, ...body }, {
    stripUnknown: true,
  });

  const taskList = await taskListsRepository.getById(validated.id);

  if (!taskList) {
    throw Object.assign(new Error(messages.notFound('task-list')), {
      status: 404,
    });
  }

  Object.keys(validated).forEach((key) => {
    taskList.setDataValue(key, validated[key]);
  });

  const updatedTaskList = await taskListsRepository.update(taskList);

  return updatedTaskList;
};
