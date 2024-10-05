const express = require('express')
const router = express.Router()
const checkAdmin = require('../middlewaare/checkAdmin')
const {handleGetEmails,handleSendEmail} = require('../controllers/mails.controllers')
router.post('/send',handleSendEmail)
router.get('/',checkAdmin, handleGetEmails)
module.exports = router 