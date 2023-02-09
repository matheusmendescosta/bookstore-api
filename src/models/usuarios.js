"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Usuarios.belongsTo(models.livros);
    }
  }
  Usuarios.init(
    {
      nome: DataTypes.STRING,
      endereco: DataTypes.STRING,
      telefone: DataTypes.STRING,
      email: DataTypes.STRING,
      data_inscricao: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Usuarios",
    }
  );
  return Usuarios;
};
