const express = require('express')
const checkAdmin = require('../middlewaare/checkAdmin')
const router = express.Router()
const {handleCreateUpdate,handleDeleteUpdate,handleGetUpdates} = require('../controllers/updates.controllers')
router.post('/addupdate',checkAdmin,handleCreateUpdate)
router.delete('/delete/:id',checkAdmin,handleDeleteUpdate)
router.get('/',handleGetUpdates)
module.exports = router