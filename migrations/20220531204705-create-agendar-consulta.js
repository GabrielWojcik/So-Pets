'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('AgendarConsulta', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      dataConsulta: {
        type: Sequelize.STRING
      },
      nascimentoAnimal: {
        type: Sequelize.STRING
      },
      nomeAnimal: {
        type: Sequelize.STRING
      },
      tipoConsulta: {
        type: Sequelize.STRING
      },
      sintomas: {
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
    await queryInterface.dropTable('AgendarConsulta');
  }
};