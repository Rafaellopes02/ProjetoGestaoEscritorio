const LoginRouter = require('express').Router();
const controller = require('../controllers/login');

// userRouter.get('/', (req, res) => {
// 	res.send('user request!');
// });

LoginRouter.get('/', controller.getAll); //api/pessoa
LoginRouter.get('/:id', controller.getById); //api/pessoa/5
/*LoginRouter.post('/create', controller.create);
LoginRouter.put('/update', controller.update);
LoginRouter.delete('/delete', controller.delete);*/

module.exports = LoginRouter;
