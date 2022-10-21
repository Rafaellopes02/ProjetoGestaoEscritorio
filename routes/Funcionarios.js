const FuncionariosRouter = require('express').Router();
const controller = require('../controllers/funcionarios');

// userRouter.get('/', (req, res) => {
// 	res.send('user request!');
// });

FuncionariosRouter.get('/', controller.getAll); //api/pessoa
FuncionariosRouter.get('/:id', controller.getById); //api/pessoa/5
/*FuncionariosRouter.post('/create', controller.create);
FuncionariosRouter.put('/update', controller.update);
FuncionariosRouter.delete('/delete', controller.delete);*/

module.exports = FuncionariosRouter;
