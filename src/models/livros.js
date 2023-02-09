"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Livros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Livros.belongsTo(models.usuarios);
    }
  }
  Livros.init(
    {
      titulo: DataTypes.STRING,
      autor: DataTypes.STRING,
      editora: DataTypes.STRING,
      ano_publicacao: DataTypes.DATE,
      numero_paginas: DataTypes.INTEGER,
      quantidade_disponivel: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Livros",
    }
  );
  return Livros;
};
