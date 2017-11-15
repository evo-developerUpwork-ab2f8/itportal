const router = require('express').Router();
const documentController = require('../controllers/documentController');


router.get('/', documentController.getDocuments);
router.get('/purchaseorder', documentController.allPurchaseOrders);
router.get('/purchaseorder/add', documentController.createPurchaseOrder);
router.post('/purchaseorder/add', documentController.addPurchaseOrder);
router.get('/purchaseorder/:id', documentController.getPurchaseOrder);
router.get('/purchaserequest', documentController.allPurchaseRequests);
router.get('/purchaserequest/add', documentController.createCapex);
router.post('/purchaserequest/add', documentController.addCapex);
router.get('/purchaserequest/:id', documentController.getCapexPage);

module.exports = router;
