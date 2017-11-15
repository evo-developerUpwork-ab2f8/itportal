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




/*========================================== Start Inventory ========================================*/
// inventory page
router.get('/inventory', inventoryController.inventoryhomePage);

/* =================== Start Software ================== */

// get software licences list page
router.get('/inventory/software', inventoryController.softwareList);
// get the add software page
router.get('/inventory/software/add', inventoryController.getAddSoftwareLicence)
// add new software licence
router.post('/inventory/software/add', inventoryController.addSoftwareLicence);
// display the software licence page
router.get('/inventory/software/:id', inventoryController.softwareLicencePage);

/* =================== Start Software ================== */


/* =================== Start Hardware ================== */
// get hardware Items page
router.get('/inventory', inventoryController.inventoryhomePage);
router.get('/inventory/hardware', inventoryController.hardwareItemsList);
router.post('/inventory/hardware/add', inventoryController.getaddHardware);
router.get('/inventory/hardware/:id', inventoryController.hardwareItemPage);


//router.get('/support', supportController.supporthomePage);
router.get('/support', supportController.getTickets);
router.get('/support/editTicket', supportController.editTicket);
router.get('/support/createticket', supportController.viewCreateTicket);
router.post('/support/createticket', supportController.createTicket);


/* =================== Start Suppliers ================== */
// --> get a list of all suppliers
router.get('/inventory/supplier', suppliersController.suppliersList);
// --> get add supplier page
router.get('/inventory/supplier/add', suppliersController.getAddSupplier);
// --> add a supplier to the DB
router.post('/inventory/supplier/add', suppliersController.addSupplier);
// --> Get a Supplier Page
router.get('/inventory/supplier/:id', suppliersController.getSupplierPage);
/* ================== End Suppliers ================== */
/*========================================== End Inventory ===========================================*/

/* ========================================= Start Documents ======================================== */
// --> get All Documents
router.get('/documents', documentController.allDocuments);

             /* ==================== Purchase Order =====================*/
// --> get all purchase orders
router.get('/documents/purchaseorder', documentController.allPurchaseOrders);
// --> get add po page
router.get('/documents/purchaseorder/add', documentController.getAddPurchaseOrder);
// --> add purchase order
router.post('/documents/purchaseorder/add', documentController.addPurchaseOrder);
// --> view po page
router.get('/documents/purchaseorder/:id', documentController.getPurchaseOrder);

            /* ===================== Purchase Request ====================*/
// --> get all purchase requests
router.get('/documents/purchaserequest', documentController.allPurchaseRequests);
// --> get add purchase request page
router.get('/documents/purchaserequest/add', documentController.getAddCapex);
// --> add purchase request
router.post('/documents/purchaserequest/add', documentController.addCapex);
// --> view purchase request page
router.get('/documents/purchaserequest/:id', documentController.getCapexPage);
/* ======================================== End Documents =========================================== */



/* ======================================== Start Directory =========================================== */
router.get('/directory', directoryController.directoryhomePage);
/* ======================================== End Directory =========================================== */



/* ======================================== Start Admin Part ============================================*/
router.get('/admin', mainController.adminPage);
/* ======================================== End Admin Part ===============================================*/

module.exports = router;
