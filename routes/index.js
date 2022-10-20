const router = require("express").Router();

//ROUTE DAS PESSOAS
const pessoaRouter = require("./pessoa");
router.use("/pessoa", pessoaRouter);

//ROUTE DA HABILITAÇÃO ACADÉMICA
const habacademicRouter = require("./habacademic");
router.use("/habacademic", habacademicRouter);

//ROUTE DOS HOBBIES
const hobbiesRouter = require("./hobbies");
router.use("/hobbies", hobbiesRouter);

router.get("/", (req, res) => {
  res.send("welcome /api!");
});

module.exports = router;
