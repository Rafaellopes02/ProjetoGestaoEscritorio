const { Model } = require("sequelize");
const Sequelize = require("sequelize");
const database = require("../context/db");

const PagamentoModel = database.define(
  "Pagamentos" /*isto é o nome da tabela da base de dados*/,
  {
    IdPagamento: {
      type: Sequelize.INTEGER, //tipo de dados
      autoIncrement: true,
      primaryKey: true,
    },
    IdTrabalho: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    Valor_Pago: {
      type: Sequelize.FLOAT,
      allowNull: false,
    },
    Data: {
      type: Sequelize.DATE,
      allowNull: false,
    }
  }
);

module.exports = PagamentoModel;
