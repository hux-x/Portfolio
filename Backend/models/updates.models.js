const mongoose = require('mongoose');

// Define the schema for the updates
const updateSchema = new mongoose.Schema({
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
        default: '', // Optional field for an image URL
    },
    link: {
        type: String,
        trim: true,
        default: '', // Optional field for an external link
    }
},{timestamps:true});

const Update = mongoose.model('Update', updateSchema);

module.exports = Update;
