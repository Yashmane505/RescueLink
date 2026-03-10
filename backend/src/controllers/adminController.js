const User = require('../models/User');
const Order = require('../models/Order');

// @desc    Get all database data
// @route   GET /api/admin/all-data
// @access  Private/Admin
const getAllData = async (req, res) => {
    try {
        const users = await User.find({}).select('-password');
        const orders = await Order.find({}).populate('user', 'name email');
        
        res.json({
            users,
            orders
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error fetching all data' });
    }
};

module.exports = {
    getAllData
};
