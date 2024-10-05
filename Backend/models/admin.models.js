const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); 

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address.'],
        lowercase: true,
        trim: true
    }
}, { timestamps: true });

// Middleware to hash the password before saving
adminSchema.pre('save', async function (next) {
    const admin = this;

    if (admin.isModified('password')) {
        admin.password = await bcrypt.hash(admin.password, 10);
    }
    next();
});

// Method to compare the password for login
adminSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

// Method to update the admin's password
adminSchema.methods.updatePassword = async function (newPassword) {
    try {
        // Hash the new password
        this.password = newPassword
        
        // Save the admin document with the new password
        await this.save();
        return true;
    } catch (err) {
        console.error('Error updating password:', err.message);
        return false;
    }
};

const Admin = mongoose.model('Admin', adminSchema);

module.exports = Admin;

