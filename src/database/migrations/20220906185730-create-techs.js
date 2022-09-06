'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('techs', {
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

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('techs');
  }
};