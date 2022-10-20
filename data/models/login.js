const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/db");

const LoginModel = database.define(
  "login" /*isto é o nome da tabela da base de dados*/,
  {
    Username: {
      type: Sequelize.STRING, //tipo de dados
      autoIncrement: false,
      primaryKey: true,
    },
    Password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Num_Funcionario: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }
);

module.exports = LoginModel;
