'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ExerciseStep extends Model {
    static associate(models) {}
  }
  ExerciseStep.init(
    {
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'ExerciseStep',
    },
  );
  return ExerciseStep;
};
