const express = require('express')
const router = express.Router()
const {handleAddSkill,handleDeleteSkill,handleEditSkill,handleGetSkills} = require('../controllers/skill.controllers')
const checkAdmin = require('../middlewaare/checkAdmin')
router.post('/addskill',checkAdmin,handleAddSkill)

router.patch('/editskill/:id',checkAdmin,handleEditSkill)

router.delete('/deleteskill/:id',checkAdmin, handleDeleteSkill)

router.get('/',handleGetSkills)

module.exports = router