const PagamentosRouter = require('express').Router();
const controller = require('../controllers/pagamentos');

// userRouter.get('/', (req, res) => {
// 	res.send('user request!');
// });

PagamentosRouter.get('/', controller.getAll); //api/pessoa
PagamentosRouter.get('/:id', controller.getById); //api/pessoa/5
/*PagamentosRouter.post('/create', controller.create);
PagamentosRouter.put('/update', controller.update);
PagamentosRouter.delete('/delete', controller.delete);*/

module.exports = PagamentosRouter;
