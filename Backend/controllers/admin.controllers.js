const Admin = require('../models/admin.models');
const bcrypt = require('bcrypt')
const { createToken } = require('../services/auth');

const handleAdminLogin = async (req, res) => {
  try {
    const {username,password} = req.body;
    const admin = await handleCheckPassword(username,password)
    console.log(admin)
    if(admin){
        const token =  await createToken(username);
        console.log(token)
        return res.cookie('admin', token, { 
            httpOnly: true,  
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'Lax'  
          }).json({ response: 'ADMIN ACCESS GRANTED', token });
    }else{
        res.status(404).json({response:"Invalid Credentials"})
    }
  } catch (error) {
    res.status(400).json({response:"Internal server error"})
  }
};

const handleAdminSignup = async (req, res) => {
    try {
        const { username, password, email } = req.body;
        const newAdmin = new Admin({
            username,
            password,
            email
        });
        await newAdmin.save();
        res.status(201).json({ response: 'Admin user created successfully', admin: newAdmin });
    } catch (err) {
        console.log(err);
        res.status(500).json({ response: "Internal server error" });
    }
};

const handleCheckPassword = async (username,password) => {
    try {
        const admin = await Admin.findOne({ username });
        console.log(admin)
        if (admin && await admin.comparePassword(password)) {
            console.log('Password is correct');
           return admin
        } else {
            console.log('Incorrect password');
            return false
        }
    } catch (err) {
        console.error('Error checking password:', err.message);
    }
};

const handleChangeAdminPassword = async (req, res) => {
    try {
        const { username, newPassword,oldPassword } = req.body;
        if(!await handleCheckPassword(username,oldPassword)) return res.status(400).json({response:"Invalid Credentials"})
        
        const admin = await Admin.findOne({ username });
        if (!admin) {
            console.log('Admin user not found');
            res.status(404).json({ response: 'Admin user not found' });
            return;
        }

        const success = await admin.updatePassword(newPassword);
        if (success) {
            console.log('Password updated successfully');
            res.status(200).json({ response: 'Password updated successfully' });
        } else {
            console.log('Failed to update password');
            res.status(400).json({ response: 'Failed to update password' });
        }
    } catch (err) {
        console.error('Error changing password:', err.message);
        res.status(500).json({ response: 'Internal server error' });
    }
};

const handleAdminLogout = async (req, res) => {
    try {
        res.clearCookie('admin').json({ response: 'ADMIN LOGGED OUT' });
    } catch (err) {
        console.error('Error logging out:', err.message);
        res.status(500).json({ response: 'Internal server error' });
    }
};

module.exports = {
    handleAdminLogin,
    handleAdminSignup,
    handleCheckPassword,
    handleChangeAdminPassword,
    handleAdminLogout
};
