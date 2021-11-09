"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      // define association here
    }
  }
  usuario.init(
    {
      nome: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "usuario",
      timestamps: false,
      freezeTableName: true,
    }
  );
  return usuario;
};