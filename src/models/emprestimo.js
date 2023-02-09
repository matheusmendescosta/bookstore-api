"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Emprestimo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Emprestimo.belongsTo(models.usuarios);
      Emprestimo.belongsTo(models.livros);

      models.usuarios.hasMany(Emprestimo);
      models.livros.hasMany(Emprestimo);
    }
  }
  Emprestimo.init(
    {
      data_emprestimo: DataTypes.DATE,
      data_devolucao: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Emprestimo",
    }
  );
  return Emprestimo;
};
