const mongoose = require('mongoose');
const { Schema } = mongoose;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    subTitle: {
        type: String,
        required: 'Subtitle is required',
    },
    imageSrc: {
        type: String
    }
}, { collection: 'category' } );

module.exports = mongoose.model('Category', CategorySchema);