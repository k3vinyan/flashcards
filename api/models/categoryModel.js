const mongoose = require('mongoose');
const CardModel = mongoose.model('Card');
const { Schema } = mongoose;

const CategorySchema = new Schema({
    title: {
        type: String,
        required: 'Title is required'
    },
    subTitle: {
        type: String
        //required: 'Subtitle is required',
    },
    imageSrc: {
        type: String
    },
    cards: [CardModel.schema]
}, { collection: 'category' } );

module.exports = mongoose.model('Category', CategorySchema);
