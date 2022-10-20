const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/db");

const FuncionarioModel = database.define(
  "funcionarios" /*isto é o nome da tabela da base de dados*/,
  {
    Num_Funcionario: {
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
    CP: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Cc: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Nif: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    IBAN: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Tipo: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }
);

module.exports = FuncionarioModel;
