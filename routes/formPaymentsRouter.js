const express = require('express');
const router = express.Router();
const formPaymentsController = require('../controllers/formPaymentsController');

router.get('/', formPaymentsController.index);
router.post('/', formPaymentsController.create);

module.exports = router;