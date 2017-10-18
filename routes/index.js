const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const inventoryController = require('../controllers/inventoryController');
const supportController = require('../controllers/supportController');
const directoryController = require('../controllers/directoryController');


/* GET home page. */

router.get('/', mainController.dashPage);

router.get('/inventory', inventoryController.inventoryhomePage);

router.get('/support', supportController.supporthomePage);

router.get('/directory', directoryController.directoryhomePage);

module.exports = router;
