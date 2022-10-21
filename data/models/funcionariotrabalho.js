const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/db");

const FuncionarioTrabalhoModel = database.define(
  "funcionariotrabalho" /*isto é o nome da tabela da base de dados*/,
  {
    Num_Funcionario: {
      type: Sequelize.INTEGER, //tipo de dados
      primaryKey: true,
    },
    IdTrabalho: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Num_Horas: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Tarefa: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }
);

module.exports = FuncionarioTrabalhoModel;
