const mongoose = require('mongoose')
const skillSchema = new mongoose.Schema({
    skillTitle:{
        required:true,
        type:String
    },
    experience:{
        required:true,
        type:String
    },
    detail:{
        type:String
    },
    coverImageURL:{
        type:String
    }
},{timestamps:true})
const skill = mongoose.model('Skill',skillSchema)
module.exports = skill