'use strict';

module.exports = {
  // Oque será realizado
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('addresses', { // criar uma tabela
      id: {
        type: Sequelize.INTEGER, // tipo
        primaryKey: true, // chave primaria
        autoIncrement: true, // auto incremental 
        allowNull: false, // not null
      },
      user_id: { // associacao externa
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id"
        }, // referencia chave estrangeira
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      zipcode: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      street: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.INTEGER,
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

  // desfaz o metodo up
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('addresses');
  }
};