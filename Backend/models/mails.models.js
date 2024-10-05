const mongoose = require('mongoose')
const emailSchema = mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    sender:{
        type:String,
        required:true
    }
},{timestamps:true})
const email = mongoose.model('Email',emailSchema)
module.exports = email