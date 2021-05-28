const express = require('express');
const router = express.Router();
const ordersController = require('../controllers/ordersController');
const loginAuthenticate = require('../middlewares/loginAuthenticate')

router.get('/', ordersController.index);
router.get('/cart', loginAuthenticate, ordersController.showCartPage);
router.post('/', ordersController.create);
router.put('/:id', ordersController.update);
router.delete('/:id', ordersController.delete);

module.exports = router;