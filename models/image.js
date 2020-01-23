const mongoose = require('mongoose');

const ImageSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        type: {
            type: [String],
            required: true,
            enum: ['profile', 'avatar', 'post', 'thumb'],
        },
        description: String,
        tags: [String],
        size: {
            width: Number,
            height: Number
        },
        date: {
            type: Date,
            default: Date.now,
            required: true
        },
        isActive : {
            type: Boolean,
            required: true
        }
    },
    {
        collection: 'Images'
    }
);

module.exports = mongoose.model('Images', ImageSchema);