const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const { createOrder, getUserOrders, deleteOrder } = require('../controllers/orderController');

// All order routes should be protected
router.use(protect);

router.route('/')
    .post(createOrder)
    .get(getUserOrders);

router.route('/:id')
    .delete(deleteOrder);

module.exports = router;
