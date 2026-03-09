const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    item: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true,
        default: 'Card'
    },
    status: {
        type: String,
        required: true,
        default: 'Processing'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
