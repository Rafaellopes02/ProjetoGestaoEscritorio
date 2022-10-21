const router = require("express").Router();

//ROUTE DOS CLIENTES
const clientesRouter = require("./clientes");
router.use("/clientes", clientesRouter);

const CpRouter = require("./cp");
router.use("/cp", CpRouter);

const FuncionariosRouter = require("./funcionarios");
router.use("/funcionarios", FuncionariosRouter);

const FuncionarioTrabalhoRouter = require("./FuncTrab");
router.use("/FuncTrab", FuncionarioTrabalhoRouter);

const LoginRouter = require("./login");
router.use("/login", LoginRouter);

const PagamentosRouter = require("./Pagamentos");
router.use("/Pagamentos", PagamentosRouter);

const TrabalhosRouter = require("./Trabalhos");
router.use("/Trabalhos", TrabalhosRouter);

router.get("/", (req, res) => {
  res.send("welcome /api!");
});

module.exports = router;
