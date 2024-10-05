const mongoose = require('mongoose')
const testimonialSchema = mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    approved:{
        type:Boolean,
        default:false
    }
},{timestamps:true})
const Testimonial = mongoose.model('Testimonial',testimonialSchema)
module.exports = Testimonial