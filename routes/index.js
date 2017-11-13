const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const inventoryController = require('../controllers/inventoryController');
const supportController = require('../controllers/supportController');
const directoryController = require('../controllers/directoryController');


/* GET home page. */

router.get('/', mainController.dashPage);
router.get('/request', mainController.requestPage);
router.post('/request', supportController.createTickets);

router.get('/inventory', inventoryController.inventoryhomePage);

// add new software licence
router.post('/inventory/softwarelicence/add', inventoryController.addSoftwareLicence);
// show the software licence page
router.get('/inventory/softwarelicence/:id', inventoryController.softwareLicencePage);

//router.get('/support', supportController.supporthomePage);
router.get('/support', supportController.getTickets);
router.get('/editTicket', supportController.editTickets);

router.get('/directory', directoryController.directoryhomePage);

module.exports = router;
