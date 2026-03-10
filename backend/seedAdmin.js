const dotenv = require('dotenv');
dotenv.config();

const mongoose = require('mongoose');
const dns = require('dns');
const User = require('./src/models/User');

dns.setServers(['8.8.8.8', '8.8.4.4']);

const connectDB = async () => {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('ERROR: MONGODB_URI is not set in your .env file');
        process.exit(1);
    }
    const conn = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
};

const seedAdmin = async () => {
    try {
        await connectDB();

        const adminEmail = 'yashmane6417@gmail.com';
        const adminPassword = 'yash@123';

        let admin = await User.findOne({ email: adminEmail });
        if (!admin) {
            await User.create({
                name: 'Admin Yash',
                email: adminEmail,
                password: adminPassword,
                phone: '9999999999',
                vehicleNumber: 'ADMIN-1',
                userType: 'car'
            });
            console.log('✅ Admin user created successfully');
        } else {
            // Force password update even if not modified (bypass pre-save guard)
            const bcrypt = require('bcryptjs');
            const salt = await bcrypt.genSalt(10);
            admin.password = await bcrypt.hash(adminPassword, salt);
            await User.updateOne({ email: adminEmail }, { password: admin.password });
            console.log('✅ Admin already exists — password re-synced');
        }
    } catch (error) {
        console.error('❌ Error creating admin:', error.message);
    } finally {
        await mongoose.disconnect();
        console.log('MongoDB Disconnected.');
    }
};

seedAdmin();
