'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pet_cadastros', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome_animal: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.STRING
      },
      data_de_nascimento: {
        type: Sequelize.STRING
      },
      vacinas_aplicadas: {
        type: Sequelize.STRING
      },
      raca: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pet_cadastros');
  }
};