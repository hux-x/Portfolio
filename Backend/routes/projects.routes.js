const express = require('express')
const checkAdmin = require('../middlewaare/checkAdmin')
const router = express.Router()
const {handleAddProject,handleDeleteProject,handleGetProjects}= require('../controllers/projects.controllers')
router.post('/addproject',checkAdmin,handleAddProject)
router.delete('/delete/:id',checkAdmin,handleDeleteProject)
router.get('/',handleGetProjects)
module.exports = router