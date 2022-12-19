'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistic extends Model {
    static associate(models) {
      Statistic.belongsToMany(models.Food, {
        through: 'FoodLog',
        as: 'foods',
        foreignKey: 'statisticId',
      });
      Statistic.belongsToMany(models.Sticker, {
        through: 'StickerLog',
        as: 'stickers',
        foreignKey: 'statisticId',
      });
    }
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
