const { Op } = require("sequelize");
const { tasksRepository } = require("../../repositories");
const { TaskList } = require("../../models");

module.exports.list = async (query) => {
  const name = query.name ? query.name : "";

  const { count, rows } = await tasksRepository.list({
    include: [
      {
        model: TaskList,
        attributes: ["id", "name"],
      },
    ],
    attributes: { exclude: ["deletedAt", "createdAt", "TaskListId"] },
    where: {
      name: {
        [Op.iLike]: `%${name}%`,
      },
    },
    order: [["createdAt", "DESC"]],
  });

  return {
    metadata: {
      total: count,
    },
    data: rows,
  };
};
