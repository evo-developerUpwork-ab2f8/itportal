const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');
const inventoryController = require('../controllers/inventoryController');
const supportController = require('../controllers/supportController');
const directoryController = require('../controllers/directoryController');
const suppliersController = require('../controllers/suppliersController');
const documentController = require('../controllers/documentController');

/* GET home page. */

router.get('/', mainController.dashPage);



// get software licences list page
router.get('/inventory/softwarelicence', inventoryController.softwareList);
// add new software licence
router.post('/inventory/softwarelicence/add', inventoryController.addSoftwareLicence);
// display the software licence page
router.get('/inventory/softwarelicence/:id', inventoryController.softwareLicencePage);


// get hardware Items page
router.get('/inventory', inventoryController.inventoryhomePage);
router.get('/inventory/hardware', inventoryController.hardwareItemsList);
router.post('/inventory/hardware/add', inventoryController.addHardware);
router.get('/inventory/hardware/:id', inventoryController.hardwareItemPage);

//router.get('/support', supportController.supporthomePage);
router.get('/support', supportController.getTickets);
router.get('/support/editTicket', supportController.editTicket);
router.get('/support/createticket', supportController.viewCreateTicket);
router.post('/support/createticket', supportController.createTicket);

router.get('/directory', directoryController.directoryhomePage);

/* =================== Start Suppliers ================== */

// --> get a list of all suppliers
router.get('/supplier', suppliersController.suppliersList);

// --> add a supplier to the DB
router.post('/supplier/add', suppliersController.addSupplier);

// --> Get a Supplier Page
router.get('/supplier/:id', suppliersController.getSupplierPage);

/* ================== End Suppliers ================== */

/* ================== Start document ================== */

router.post('/documents/po/add', documentController.addPurchaseOrder);

router.get('/documents/po/:id', documentController.getPurchaseOrder);

router.post('/documents/capex/add', documentController.addCapex);

router.get('/documents/capex/:id', documentController.getCapexPage);

/* ================== Admin Part =====================*/

router.get('/admin', mainController.adminPage);


/* ================== End document ================== */
module.exports = router;
