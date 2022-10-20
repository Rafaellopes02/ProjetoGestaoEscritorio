const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/db");

const TrabalhoModel = database.define(
  "Trabalhos" /*isto é o nome da tabela da base de dados*/,
  {
    IdTrabalho: {
      type: Sequelize.INTEGER, //tipo de dados
      autoIncrement: true,
      primaryKey: true,
    },
    Titulo: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Descricao: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    Total_Pagar: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    Num_Cliente: {
      type: Sequelize.INTEGER,
      allowNull: false,
    }
  }
);

module.exports = TrabalhoModel;
