const yup = require('yup')
const { messages } = require('../../utils')
const { tasksRepository } = require('../../repositories')

module.exports.update = async (body) => {
  const schema = yup.object().shape({
    id: yup.number(),
    name: yup.string(),
    concluded: yup.boolean()
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


  Object.keys(validated).forEach((key) => {
    task.setDataValue(key, validated[key])
  })


  return await tasksRepository.update(task)
}
