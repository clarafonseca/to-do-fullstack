const { Task } = require("../../models");
const { taskListsRepository } = require("../../repositories");
const { messages } = require("../../utils");

module.exports.read = async (id) => {
  const taskList = await taskListsRepository.list({
    include: [
      {
        model: Task,
        attributes: ["id", "name", "concluded"],
      },
    ],
    where: {
      id,
    },
    order: [["createdAt", "DESC"]],
  });

  if (!taskList) {
    throw Object.assign(new Error(messages.notFound("task-list")), {
      status: 404,
    });
  }

  return taskList.rows[0];
};
