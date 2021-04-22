const express = require('express');
const router = express.Router();
const scentController = require('../controllers/scentsController');

router.get('/', scentController.index);
router.post('/', scentController.create);
router.put('/:id', scentController.update);
router.delete('/:id', scentController.delete);

module.exports = router;