const express = require('express');
const router = express.Router();
const { getAllData } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');

const adminOnly = (req, res, next) => {
    if (req.user && req.user.email === 'yashmane6417@gmail.com') {
        next();
    } else {
        res.status(403).json({ message: 'Not authorized as admin' });
    }
};

router.get('/all-data', protect, adminOnly, getAllData);

module.exports = router;
