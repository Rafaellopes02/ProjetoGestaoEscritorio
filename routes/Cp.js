const CpRouter = require('express').Router();
const controller = require('../controllers/Cp');

// userRouter.get('/', (req, res) => {
// 	res.send('user request!');
// });

CpRouter.get('/', controller.getAll); //api/pessoa
CpRouter.get('/:id', controller.getById); //api/pessoa/5
/*cpRouter.post('/create', controller.create);
cpRouter.put('/update', controller.update);
cpRouter.delete('/delete', controller.delete);*/

module.exports = CpRouter;
