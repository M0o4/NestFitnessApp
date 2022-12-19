'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FoodLog extends Model {
    static associate(models) {}
  }
  FoodLog.init(
    {
      foodId: DataTypes.INTEGER,
      statisticId: DataTypes.INTEGER,
      isEaten: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'FoodLog',
    },
  );
  return FoodLog;
};
