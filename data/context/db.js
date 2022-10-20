const Sequelize = require("sequelize");
const database = new Sequelize({
  host: "localhost",
  port: 3306,
  username: "root",
  // password: '',
  database: "gestaoescritorio",
  dialect: "mysql",
});
module.exports = database;
