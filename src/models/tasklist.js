const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/database/sequelize');

class Task extends Model {}
Task.init(
  {
    name: DataTypes.STRING,
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'TaskList',
    tableName: 'task_lists',
    paranoid: true,
  },
);

module.exports = Task;
