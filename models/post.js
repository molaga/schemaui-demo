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
    },
    hobbies: [{
        animal: String,
        strength: {
            type: Number,
            required: true
        }
    }],
    visitors: [{
        name: String,
        age: Number
    }],
    some: {
        deep: {
            nested: {
                field: [String]
            }
        }
    }
});

module.exports = mongoose.model('Posts', PostSchema);