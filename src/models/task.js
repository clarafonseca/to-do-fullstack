const { Model, DataTypes, Sequelize } = require('sequelize');
const config = require('../config/database/sequelize');

class Task extends Model {}
Task.init(
  {
    taskListId: {
      type: DataTypes.NUMBER,
      allowNull: true,
    },
    name: DataTypes.STRING,
    concluded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Task',
    tableName: 'tasks',
    paranoid: true,
  },
);

module.exports = Task;
