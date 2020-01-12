const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    shortContent: {
        type: String,
        required: false
    },
    active: {
        type: Boolean,
        required: false,
        default: false
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);