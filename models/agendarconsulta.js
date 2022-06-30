'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AgendarConsulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AgendarConsulta.init({
    dataConsulta: DataTypes.STRING,
    nascimentoAnimal: DataTypes.STRING,
    nomeAnimal: DataTypes.STRING,
    tipoConsulta: DataTypes.STRING,
    sintomas: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AgendarConsulta',
  });
  return AgendarConsulta;
};