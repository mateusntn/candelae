const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const ordersController = require('../controllers/ordersController')
const validateRegistration = require('../middlewares/validateRegistration');
const loginAuthenticate = require('../middlewares/loginAuthenticate')

router.get('/login', usersController.showLoginPage);
router.post('/login', usersController.auth);

router.get('/register', usersController.showRegisterPage);
router.post('/register', validateRegistration, usersController.create);

router.get('/profile', loginAuthenticate , usersController.showProfilePage);
router.post('/edit', validateRegistration, usersController.update);

router.get('/edit', usersController.showEditPage);

router.delete('/:id', usersController.delete);

module.exports = router;
