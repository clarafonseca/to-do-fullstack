/* eslint-disable no-restricted-globals */
const { Task } = require("../../models");
const { taskListsRepository, tasksRepository } = require("../../repositories");
const { messages } = require("../../utils");

module.exports.deleteTaskList = async (id) => {
  if (!id || isNaN(id)) {
    throw Object.assign(new Error(messages.invalidFields), {
      status: 404,
    });
  }

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
  });

  if (!taskList.rows) {
    throw Object.assign(new Error(messages.notFound("task-list")), {
      status: 404,
    });
  }

  const tasks = taskList.rows[0].getDataValue("Tasks");

  tasks.map((task) => {
    tasksRepository.destroy(task.getDataValue("id"));
  });

  taskListsRepository.destroy(id);
};
