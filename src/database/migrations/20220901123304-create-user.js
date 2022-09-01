'use strict';

module.exports = {
  // Oque será realizado
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', { // criar uma tabela
      id: {
        type: Sequelize.INTEGER, // tipo
        primaryKey: true, // chave primaria
        autoIncrement: true, // auto incremental 
        allowNull: false, // not null
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: { // armazena data de criacao
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: { // armazena a data de atualizacao
        type: Sequelize.DATE,
        allowNull: false,
      }
    })

  },

  // desfaz o metodo up
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
  }
};