const clientesRouter = require('express').Router();
const controller = require('../controllers/clientes');

// userRouter.get('/', (req, res) => {
// 	res.send('user request!');
// });

clientesRouter.get('/', controller.getAll); //api/pessoa
clientesRouter.get('/:id', controller.getById); //api/pessoa/5
/*clientesRouter.post('/create', controller.create);
clientesRouter.put('/update', controller.update);
clientesRouter.delete('/delete', controller.delete);*/

module.exports = clientesRouter;
