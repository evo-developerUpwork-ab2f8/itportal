const router = require('express').Router();
const inventoryController = require('../controllers/inventoryController');
const suppliersController = require('../controllers/suppliersController');

router.get('/', inventoryController.inventoryhomePage);
router.get('/software', inventoryController.softwareList);
router.get('/software/add', inventoryController.getAddSoftwareLicence)
router.post('/software/add', inventoryController.addSoftwareLicence);
router.get('/software/:id', inventoryController.softwareLicencePage);
router.get('/hardware', inventoryController.hardwareItemsList);
router.post('/hardware/add', inventoryController.getAddHardware);
router.get('/hardware/:id', inventoryController.hardwareItemPage);
router.get('/supplier', suppliersController.suppliersList);
router.get('/supplier/add', suppliersController.getAddSupplier);
router.post('/supplier/add', suppliersController.addSupplier);
router.get('/supplier/:id', suppliersController.getSupplierPage);

module.exports = router;
