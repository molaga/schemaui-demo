const mongoose = require('mongoose');

const SettingsSchema = new mongoose.Schema(
    {
        key: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            default: Date.now,
            required: true
        }
    },
    {
        collection: 'Settings'
    }
);

SettingsSchema.index({ key: 1 }, { unique: true });

module.exports = mongoose.model('Settings', SettingsSchema);