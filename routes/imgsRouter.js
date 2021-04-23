const express = require('express');
const router = express.Router();
const imgsController = require('../controllers/imgsController');

router.get('/', imgsController.index);
router.post('/', imgsController.create);
router.put('/:id', imgsController.update);
router.delete('/:id', imgsController.delete);

module.exports = router;