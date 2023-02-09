"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Livros", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      titulo: {
        type: Sequelize.STRING,
      },
      autor: {
        type: Sequelize.STRING,
      },
      editora: {
        type: Sequelize.STRING,
      },
      ano_publicacao: {
        type: Sequelize.DATE,
      },
      numero_paginas: {
        type: Sequelize.INTEGER,
      },
      quantidade_disponivel: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Livros");
  },
};
