'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cadastroPet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  cadastroPet.init({
    nome: DataTypes.STRING,
    peso: DataTypes.STRING,
    nascimento: DataTypes.STRING,
    vacina: DataTypes.STRING,
    raca: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cadastroPet',
  });
  return cadastroPet;
};

// module.exports = cadastroPet;