const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const directoryController = require('../controllers/directoryController');
const suppliersController = require('../controllers/suppliersController');

/* GET home page. */
router.get('/', mainController.dashPage);

router.get('/directory', directoryController.directoryhomePage);


router.get('/admin', mainController.adminPage);


module.exports = router;
