const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxlength: 100
    },
    content: {
        type: String,
        required: true,
        trim: true,
    },
    imageURL: {
        type: String,
        trim: true,
        default: '', 
    },
    link: {
        type: String,
        trim: true,
        default: '', 
    }
},{timestamps:true});

const project = mongoose.model('Project', projectSchema);

module.exports = project;