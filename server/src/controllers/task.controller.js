const { taskService } = require("../services");

module.exports = {
  create: async (req, res) => {
    try {
      const response = await taskService.create(req.body);
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
      const response = await taskService.read(req.params.id);
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json(error.message);
    }
  },
  update: async (req, res) => {
    try {
      const response = await taskService.update(req.params.id, req.body);
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
      const response = await taskService.deleteTask(req.params.id);
      return res.status(204).json(response);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json(error.message);
    }
  },
  list: async (req, res) => {
    try {
      const response = await taskService.list(req.query);
      return res.status(200).json(response);
    } catch (error) {
      console.error(error);
      return res.status(error.status || 500).json(error.message);
    }
  },
};
