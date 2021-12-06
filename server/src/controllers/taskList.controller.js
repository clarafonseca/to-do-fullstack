const { taskListService } = require("../services");

module.exports = {
  create: async (req, res) => {
    try {
      const response = await taskListService.create(req.body);
      return res.status(201).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.name === "ValidationError" ? 422 : error.status || 500)
        .json(error.message);
    }
  },
  read: async (req, res) => {
    try {
      const response = await taskListService.read(req.params.id);
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json(error.message);
    }
  },
  update: async (req, res) => {
    try {
      const response = await taskListService.update(req.params.id, req.body);
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res
        .status(error.name === "ValidationError" ? 422 : error.status || 500)
        .json(error.message);
    }
  },
  delete: async (req, res) => {
    try {
      const response = await taskListService.deleteTaskList(req.params.id);
      return res.status(204).json(response);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json(error.message);
    }
  },
  list: async (req, res) => {
    try {
      const response = await taskListService.list(req.query);

      if (!response || response.data.length === 0) {
        return res.status(204).end();
      }

      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json(error.message);
    }
  },
};
