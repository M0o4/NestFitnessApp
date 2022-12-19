'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserReward extends Model {
    static associate(models) {}
  }
  UserReward.init(
    {
      userId: DataTypes.INTEGER,
      rewardId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserReward',
    },
  );
  return UserReward;
};
