const express = require('express')
const router = express.Router()
const {handleAdminLogin,handleAdminLogout,
    handleChangeAdminPassword,handleAdminSignup} = require('../controllers/admin.controllers')
const checkAdmin = require('../middlewaare/checkAdmin')

router.post('/login',handleAdminLogin)
router.post('/signup',handleAdminSignup)
router.get('/logout',handleAdminLogout)
router.patch('/updatepassword',handleChangeAdminPassword)
module.exports = router