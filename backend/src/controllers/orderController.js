const Order = require('../models/Order');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const { item, amount, address, city, pincode, paymentMethod } = req.body;

        if (!item || !amount || !address || !city || !pincode) {
            return res.status(400).json({ message: "All order fields are required" });
        }

        const order = new Order({
            user: req.user._id,
            item,
            amount,
            address,
            city,
            pincode,
            paymentMethod: paymentMethod || 'Card'
        });

        const createdOrder = await order.save();
        res.status(201).json(createdOrder);
    } catch (error) {
        res.status(500).json({ message: "Failed to place order", error: error.message });
    }
};

// Get user orders
const getUserOrders = async (req, res) => {
    try {
        // Find orders belonging to the logged in user, sort latest first
        const orders = await Order.find({ user: req.user._id }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch orders", error: error.message });
    }
};

// Delete an order
const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const order = await Order.findById(orderId);

        if (!order) {
            return res.status(404).json({ message: "Order not found" });
        }

        // Verify that the order belongs to the user trying to delete it
        if (order.user.toString() !== req.user._id.toString()) {
            return res.status(401).json({ message: "Not authorized to delete this order" });
        }

        await Order.findByIdAndDelete(orderId);
        res.json({ message: "Order removed successfully" });
    } catch (error) {
        res.status(500).json({ message: "Failed to remove order", error: error.message });
    }
};

module.exports = {
    createOrder,
    getUserOrders,
    deleteOrder
};
