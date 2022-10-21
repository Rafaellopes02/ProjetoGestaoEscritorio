const FuncionarioTrabalhoRouter = require('express').Router();
const controller = require('../controllers/funcionariotrabalho');

// userRouter.get('/', (req, res) => {
// 	res.send('user request!');
// });

FuncionarioTrabalhoRouter.get('/', controller.getAll); //api/pessoa
FuncionarioTrabalhoRouter.get('/:id', controller.getById); //api/pessoa/5
/*FuncionarioTrabalhadorRouter.post('/create', controller.create);
FuncionarioTrabalhadorRouter.put('/update', controller.update);
FuncionarioTrabalhadorRouter.delete('/delete', controller.delete);*/

module.exports = FuncionarioTrabalhoRouter;
