const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/db");

const CpModel = database.define(
  "cp" /*isto é o nome da tabela da base de dados*/,
  {
    Cp: {
      type: Sequelize.STRING, //tipo de dados
      primaryKey: true,
    },
    Rua: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Cidade: {
      type: Sequelize.STRING,
      allowNull: false,
    }
  }
);

module.exports = CpModel;
