const TrabalhosRouter = require('express').Router();
const controller = require('../controllers/trabalho');

// userRouter.get('/', (req, res) => {
// 	res.send('user request!');
// });

TrabalhosRouter.get('/', controller.getAll); //api/pessoa
TrabalhosRouter.get('/:id', controller.getById); //api/pessoa/5
/*TrabalhosRouter.post('/create', controller.create);
TrabalhosRouter.put('/update', controller.update);
TrabalhosRouter.delete('/delete', controller.delete);*/

module.exports = TrabalhosRouter;
