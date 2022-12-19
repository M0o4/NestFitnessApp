'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {}
  }
  User.init(
    {
      username: DataTypes.STRING,
      login: DataTypes.STRING,
      password: DataTypes.STRING,
      sex: DataTypes.INTEGER,
      height: DataTypes.DOUBLE,
      weight: DataTypes.DOUBLE,
      birthDate: DataTypes.DATE,
      role: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
    },
  );
  return User;
};
