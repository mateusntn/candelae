const express = require('express');
const router = express.Router();
const formPaymentsController = require('../controllers/formPaymentsController');

router.get('/', formPaymentsController.index);
router.post('/', formPaymentsController.create);
router.put('/:id', formPaymentsController.update);
router.delete('/:id', formPaymentsController.delete);

module.exports = router;