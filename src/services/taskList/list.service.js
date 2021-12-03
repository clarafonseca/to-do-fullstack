const { Op } = require('sequelize');
const { taskListsRepository } = require('../../repositories');
const { Task } = require('../../models');

module.exports.list = async (query) => {
  const name = query.name ? query.name : '';

  const { count, rows } = await taskListsRepository.list({
    include: [{
      model: Task,
      attributes: ['id', 'name', 'concluded'],
    }],
    attributes: { exclude: ['deletedAt', 'createdAt', 'TaskId'] },
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    order: [['createdAt', 'DESC']],
  });

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
