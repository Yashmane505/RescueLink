const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    userType: {
        type: String,
        required: true,
        enum: ['car', 'ambulance'],
        default: 'car'
    },
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be at least 3 characters long']
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    phone: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please fill a valid 10-digit phone number']
    },
    vehicleNumber: {
        type: String,
        required: true,
        minlength: [5, 'Vehicle number must be at least 5 characters long']
    },
    hospitalName: {
        type: String,
        required: function() { return this.userType === 'ambulance'; }
    },
    licenseNumber: {
        type: String,
        required: function() { return this.userType === 'ambulance'; }
    },
    password: {
        type: String,
        required: true,
        minlength: [6, 'Password must be at least 6 characters long']
    }
}, {
    timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Compare password
userSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
