'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class File extends Model {
    static associate(models) {}
  }
  File.init(
    {
      filePath: DataTypes.STRING,
      mimeType: DataTypes.STRING,
      size: DataTypes.DOUBLE,
      bucket: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'File',
    },
  );
  return File;
};
