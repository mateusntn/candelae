const express = require('express');
const router = express.Router();
const order_itemsController = require('../controllers/order_itemsController');

router.get('/', order_itemsController.index);
router.put('/:id', order_itemsController.update);
router.post('/', order_itemsController.create);
router.delete('/:id', order_itemsController.delete);

module.exports = router;