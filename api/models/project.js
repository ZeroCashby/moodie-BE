const mongoose = require('mongoose');
const BoardSchema = require('./board');

const ProjectSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    identifier: Number,
    name: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    boards: [BoardSchema]
});

module.exports = mongoose.model('Project', ProjectSchema);