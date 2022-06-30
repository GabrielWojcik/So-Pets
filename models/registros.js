'use strict';
const Pet = require('./cadastropet');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registros extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Registros.init({
    nome: DataTypes.STRING,
    sobrenome: DataTypes.STRING,
    data_de_nascimento: DataTypes.STRING,
    cpf: DataTypes.STRING,
    endereco: DataTypes.STRING,
    estado: DataTypes.STRING,
    telefone: DataTypes.STRING,
    login: DataTypes.STRING,
    senha: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registros',
  });
  return Registros;
};

// Pet.hasMany(Registros, {
//   foreignKey: 'id'
// })

// module.exports = Registros;