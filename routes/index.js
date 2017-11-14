const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const inventoryController = require('../controllers/inventoryController');
const supportController = require('../controllers/supportController');
const directoryController = require('../controllers/directoryController');
const suppliersController = require('../controllers/suppliersController');

/* GET home page. */

router.get('/', mainController.dashPage);
router.get('/request', mainController.requestPage);
router.post('/request', supportController.createTickets);

router.get('/inventory', inventoryController.inventoryhomePage);

// get software licences list page
router.get('/inventory/softwarelicence', inventoryController.softwareList);

// add new software licence
router.post('/inventory/softwarelicence/add', inventoryController.addSoftwareLicence);
// display the software licence page
router.get('/inventory/softwarelicence/:id', inventoryController.softwareLicencePage);


// get hardware Items page
router.get('/inventory/hardware', inventoryController.hardwareItemsList);

// add new hardware
router.post('/inventory/hardware/add', inventoryController.addHardware);
// display the hardware item page
router.get('/inventory/hardware/:id', inventoryController.hardwareItemPage);

//router.get('/support', supportController.supporthomePage);
router.get('/support', supportController.getTickets);
router.get('/editTicket', supportController.editTickets);

router.get('/directory', directoryController.directoryhomePage);

/* =================== Start Suppliers ================== */

// --> get a list of all suppliers
router.get('/supplier', suppliersController.suppliersList);

// --> add a supplier to the DB
router.post('/supplier/add', suppliersController.addSupplier);

// --> Get a Supplier Page
router.get('/supplier/:id', suppliersController.getSupplierPage);

/* ================== End Suppliers ================== */

module.exports = router;
