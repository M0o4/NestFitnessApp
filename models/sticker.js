'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sticker extends Model {
    static associate(models) {
      Sticker.belongsToMany(models.Statistic, {
        through: 'StickerLog',
        as: 'statistics',
        foreignKey: 'stickerId',
      });
    }
  }
  Sticker.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Sticker',
    },
  );
  return Sticker;
};
