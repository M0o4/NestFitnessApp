'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StickerLog extends Model {
    static associate(models) {}
  }
  StickerLog.init(
    {
      stickerId: DataTypes.INTEGER,
      statisticId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'StickerLog',
    },
  );
  return StickerLog;
};
