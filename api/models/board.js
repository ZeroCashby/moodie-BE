const mongoose = require('mongoose');
// const UserSchema = require('./user');

const BoardSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    user: String,
    images: [{
        url: String
    }],
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }]
});

module.exports = BoardSchema;