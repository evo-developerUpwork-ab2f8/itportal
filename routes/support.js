const router = require('express').Router();
const supportController = require('../controllers/supportController');

router.get('/', supportController.getTickets);
router.get('/editTicket', supportController.editTicket);
router.get('/createticket', supportController.viewCreateTicket);
router.post('/createticket', supportController.createTicket);

module.exports = router;
