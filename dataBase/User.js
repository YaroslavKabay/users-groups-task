const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    username: { type: String, trim: true, required: true },
    email: { type: String, trim: true, lowercase: true, required: true, unique: true },
    // password: { type: String, required: true },
    // cars: {
    //     type: [Schema.Types.ObjectId],
    //     ref: 'car',
    //     select: false
    // },
}, {
    timestamps: true,
    versionKey: false
});

module.exports = model('user', userSchema);