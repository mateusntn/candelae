const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsControllers');

router.get('/', productsController.index);
router.get('/:id', productsController.filterByPk);
router.post('/', productsController.create);
router.put('/:id', productsController.update);
router.delete('/:id', productsController.delete);

module.exports = router;
