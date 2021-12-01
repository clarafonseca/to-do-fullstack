const { tasksRepository } = require('../../repositories')
const { messages } = require('../../utils')

module.exports.deleteTask = async (body) => {
  const schema = yup.object().shape({
    id: yup.number().required(),
  })

  const validated = await schema.validate(body, {
    stripUnknown: true
  })

  const task = await tasksRepository.getById(validated.id)

  if (!task) {
    throw Object.assign(new Error(messages.notFound('task')), {
      status: 404
    })
  }

  const taskDeleted = tasksRepository.destroy(validated.id)
  if (taskDeleted) {
    return 'task-deleted'
  }
}
