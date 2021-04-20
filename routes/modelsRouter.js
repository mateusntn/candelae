const express = require('express');
const router = express.Router();
const modelsController = require('../controllers/modelsController');

router.get('/', modelsController.index);
router.post('/', modelsController.create);
router.delete('/:id', modelsController.delete);

module.exports = router;