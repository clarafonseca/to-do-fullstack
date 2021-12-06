const yup = require('yup');
const { taskListsRepository } = require('../../repositories');

module.exports.create = async (body) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
  });

  const validated = await schema.validate(body, {
    stripUnknown: true,
  });

  const taskCreated = await taskListsRepository.create(validated);

  return taskCreated;
};
