const { Schema, model } = require('mongoose');

const groupSchema = new Schema({
    name: { type: String, trim: true, required: true},
    description: { type: String, trim: true, required: true },
    users: {
        type: [Schema.Types.ObjectId],
        ref: 'user'
    }
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('group', groupSchema);