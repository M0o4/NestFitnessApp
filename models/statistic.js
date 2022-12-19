'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    static associate(models) {}
  }
  Statistic.init(
    {
      date: DataTypes.DATE,
      realCalories: DataTypes.DOUBLE,
      expectedCalories: DataTypes.DOUBLE,
      isCompleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Statistic',
    },
  );
  return Statistic;
};
