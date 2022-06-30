'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cadastrocnpj extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cadastrocnpj.init({
    cnpj: DataTypes.STRING,
    endereco: DataTypes.STRING,
    nomeFantasia: DataTypes.STRING,
    nomeRepresentante: DataTypes.STRING,
    crmv: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cadastrocnpj',
  });
  return Cadastrocnpj;
};