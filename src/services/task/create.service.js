const yup = require('yup')
const { tasksRepository } = require('../../repositories')

module.exports.create = async (body) => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    concluded: yup.boolean().required(),
  })

  const validated = await schema.validate(body, {
    stripUnknown: true
  })

  return await tasksRepository.create(validated)
}
