const express = require('express');
const router = express.Router();
const sizesController = require('../controllers/sizesController');

router.get('/', sizesController.index);
router.post('/', sizesController.create);
router.put('/:id', sizesController.update);
router.delete('/:id', sizesController.delete);

module.exports = router;