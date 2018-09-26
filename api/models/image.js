const mongoose = require('mongoose');

const ImageSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    url: String
});

module.exports = ImageSchema;