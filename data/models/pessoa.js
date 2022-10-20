const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/db");

const PessoaModel = database.define(
  "pessoa" /*isto é o nome da tabela da base de dados*/,
  {
    NPessoa: {
      type: Sequelize.INTEGER, //tipo de dados
      autoIncrement: true,
      primaryKey: true,
    },
    Nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Data_Nascimento: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    Nacionalidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Freguesia: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Morada: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  }
);

module.exports = PessoaModel;
