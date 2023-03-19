const mongoose = require('mongoose');

const publicationSchema = new mongoose.Schema({
    year: {
        type: Number,
        required: true
    },
    pageNo: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    }, 
    collaborator: {
        type: String, 
        required: true
    }, 
    link: {
        type: String, 
        required: true
    }
});

const Publication = mongoose.model('Publication', publicationSchema);
module.exports = Publication;