const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, trim: true, required: true, unique: true },
    email: { type: String, trim: true, lowercase: true, required: true, unique: true },
    group: {
        type: Schema.Types.ObjectId,
        ref: 'group'

    },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('user', userSchema);