'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Exercise extends Model {
    static associate(models) {}
  }
  Exercise.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: 'Exercise',
    },
  );
  return Exercise;
};
