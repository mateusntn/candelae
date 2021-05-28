const express = require('express');
const router = express.Router();
const adressController = require('../controllers/adressController');
const loginAuthenticate = require('../middlewares/loginAuthenticate');
router.get('/', loginAuthenticate, adressController.index);
router.post('/', loginAuthenticate, adressController.createAdress);
router.get('/editAdress/:id', adressController.indexUpdate);
router.put('/:id', adressController.update);
router.delete('/:id', adressController.delete);

module.exports = router;