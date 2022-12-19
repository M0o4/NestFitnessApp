'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Food extends Model {
    static associate(models) {
      Food.belongsToMany(models.Statistic, {
        through: 'FoodLog',
        as: 'statistics',
        foreignKey: 'foodId',
      });
    }
  }
  Food.init(
    {
      name: DataTypes.STRING,
      calories: DataTypes.DOUBLE,
      weight: DataTypes.DOUBLE,
      fat: DataTypes.DOUBLE,
      proteins: DataTypes.DOUBLE,
      carbohydrates: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: 'Food',
    },
  );
  return Food;
};
