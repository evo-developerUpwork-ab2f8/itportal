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



router.get('/inventory', inventoryController.inventoryhomePage);
router.get('/inventory/software', inventoryController.softwareList);
router.get('/inventory/software/add', inventoryController.getAddSoftwareLicence)
router.post('/inventory/software/add', inventoryController.addSoftwareLicence);
router.get('/inventory/software/:id', inventoryController.softwareLicencePage);
router.get('/inventory/hardware', inventoryController.hardwareItemsList);
router.post('/inventory/hardware/add', inventoryController.getAddHardware);
router.get('/inventory/hardware/:id', inventoryController.hardwareItemPage);
router.get('/inventory/supplier', suppliersController.suppliersList);
router.get('/inventory/supplier/add', suppliersController.getAddSupplier);
router.post('/inventory/supplier/add', suppliersController.addSupplier);
router.get('/inventory/supplier/:id', suppliersController.getSupplierPage);


router.get('/support', supportController.getTickets);
router.get('/support/editTicket', supportController.editTicket);
router.get('/support/createticket', supportController.viewCreateTicket);
router.post('/support/createticket', supportController.createTicket);



router.get('/documents', documentController.allDocuments);
router.get('/documents/purchaseorder', documentController.allPurchaseOrders);
router.get('/documents/purchaseorder/add', documentController.getAddPurchaseOrder);
router.post('/documents/purchaseorder/add', documentController.addPurchaseOrder);
router.get('/documents/purchaseorder/:id', documentController.getPurchaseOrder);
router.get('/documents/purchaserequest', documentController.allPurchaseRequests);
router.get('/documents/purchaserequest/add', documentController.getAddCapex);
router.post('/documents/purchaserequest/add', documentController.addCapex);
router.get('/documents/purchaserequest/:id', documentController.getCapexPage);


router.get('/directory', directoryController.directoryhomePage);


router.get('/admin', mainController.adminPage);


module.exports = router;
