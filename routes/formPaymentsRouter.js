const express = require('express');
const router = express.Router();
const formPaymentsController = require('../controllers/formPaymentsController');
const loginAuthenticate = require('../middlewares/loginAuthenticate');

router.get('/', loginAuthenticate, formPaymentsController.index);
router.post('/', loginAuthenticate, formPaymentsController.create);
router.put('/:id', formPaymentsController.update);
router.get('/editPayment/:id', formPaymentsController.indexUpdate);
router.delete('/:id', formPaymentsController.delete);

module.exports = router;