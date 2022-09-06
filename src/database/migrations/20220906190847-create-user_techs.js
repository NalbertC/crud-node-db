'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('user_techs', {
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
      tech_id: { // associacao externa
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "techs",
          key: "id"
        }, // referencia chave estrangeira
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
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
    return queryInterface.dropTable('user_techs');
  }
};