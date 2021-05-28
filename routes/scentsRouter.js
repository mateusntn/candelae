const express = require('express');
const router = express.Router();
const scentController = require('../controllers/scentsController');

router.get('/', scentController.index);
router.get('/about', scentController.showAboutPage);
router.get('/scents', scentController.showScentsPage);
router.post('/', scentController.create);
router.put('/:id', scentController.update);
router.delete('/:id', scentController.delete);

module.exports = router;