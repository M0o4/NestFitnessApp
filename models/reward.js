'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Reward extends Model {
    static associate(models) {}
  }
  Reward.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      cost: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Reward',
    },
  );
  return Reward;
};
