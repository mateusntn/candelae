var express = require('express');
const productsController = require('../controllers/productsControllers');
var router = express.Router();

/* GET home page. */
router.get('/', productsController.index);

module.exports = router;
