// Importar node packages
const cors = require("cors");
const express = require("express"); //alterar para novas importes(ver server.js anterior)
const morgan = require("morgan");
require("dotenv").config();

//--REST SERVER--//
const app = express();

// output dados de pedido HTTP
app.use(morgan("short"));

// Live Server CORS options
const corsOptions = {
  origin: "127.0.0.1:5500", //coloca ip do live server
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//ROUTES VÃO SER COLOCADOS AQUI!
const router = require("./routes/index.js");
app.use("/api", router);

//Fazer ligação à Base de Dados
const database = require("./data/context/db");

try {
  database.sync({ force: false, alter: true });
} catch (error) {
  console.info(error);
}

//ROUTES VÃO SER COLOCADOS AQUI!
const PORT = process.env.SERVER_PORT || 8080;
const HOST = process.env.SERVER_HOST || "localhost";

// correr server no url host:port definido em .env
app.listen(PORT, HOST, () => {
  console.log("Server up and running at http://%s:%s/api", HOST, PORT);
});
