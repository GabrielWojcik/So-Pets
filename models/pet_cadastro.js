'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pet_cadastro extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pet_cadastro.init({
    nome_animal: DataTypes.STRING,
    peso: DataTypes.STRING,
    data_de_nascimento: DataTypes.STRING,
    vacinas_aplicadas: DataTypes.STRING,
    raca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Pet_cadastro',
  });
  return Pet_cadastro;
};