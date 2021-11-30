const { Model, DataTypes, Sequelize } = require('sequelize')
const config = require('../config/database/sequelize')

class Task extends Model {}
Task.init(
  {
    name: DataTypes.STRING,
    concluded: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    }
  },
  {
    sequelize: new Sequelize(config),
    modelName: 'Task',
    tableName: 'tasks'
  }
)

module.exports = Task
