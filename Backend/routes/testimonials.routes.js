const express = require('express')
const router = express.Router()
const checkAdmin = require('../middlewaare/checkAdmin')
const {handleGetTestimonials,handleAddTestimonials, handleDeleteTestimonial, handleApproveTestimonial} = require('../controllers/testimonials.controllers')
router.post('/add',handleAddTestimonials)
router.get('/',handleGetTestimonials)
router.delete('/delete/:id',checkAdmin,handleDeleteTestimonial)
router.patch('/approve',checkAdmin,handleApproveTestimonial)
module.exports = router 