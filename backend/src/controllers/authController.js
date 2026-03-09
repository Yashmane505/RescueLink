const User = require('../models/User');
const generateToken = require('../utils/generateToken');

// @desc    Register a new user
// @route   POST /api/auth/register
// @access  Public
const registerUser = async (req, res) => {
    const { userType, name, email, phone, vehicleNumber, hospitalName, licenseNumber, password } = req.body;

    try {
        // Validations
        if (!name || name.length < 3) {
            return res.status(400).json({ message: 'Name must be at least 3 characters long' });
        }

        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!email || !emailRegex.test(email)) {
            return res.status(400).json({ message: 'Please provide a valid email address' });
        }

        if (!password || password.length < 6) {
            return res.status(400).json({ message: 'Password must be at least 6 characters long' });
        }

        if (!vehicleNumber || vehicleNumber.length < 5) {
            return res.status(400).json({ message: 'Please provide a valid vehicle number' });
        }

        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = await User.create({
            userType,
            name,
            email,
            phone,
            vehicleNumber,
            hospitalName,
            licenseNumber,
            password: password || 'defaultpassword123' // Temp default if frontend doesn't send it
        });

        if (user) {
            res.status(201).json({
                _id: user._id,
                userType: user.userType,
                name: user.name,
                email: user.email,
                phone: user.phone,
                vehicleNumber: user.vehicleNumber,
                token: generateToken(user._id)
            });
        } else {
            res.status(400).json({ message: 'Invalid user data' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Auth user & get token
// @route   POST /api/auth/login
// @access  Public
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password || 'defaultpassword123'))) {
            res.json({
                _id: user._id,
                userType: user.userType,
                name: user.name,
                email: user.email,
                phone: user.phone,
                vehicleNumber: user.vehicleNumber,
                token: generateToken(user._id)
            });
        } else {
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

// @desc    Get user profile
// @route   GET /api/auth/profile
// @access  Private
const getUserProfile = async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
        res.json({
            _id: user._id,
            userType: user.userType,
            name: user.name,
            email: user.email,
            phone: user.phone,
            vehicleNumber: user.vehicleNumber
        });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
};

module.exports = {
    registerUser,
    loginUser,
    getUserProfile
};
