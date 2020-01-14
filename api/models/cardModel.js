const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
    term: {
        type: String,
        required: 'term is required'
    },
    termHtmlFormat: {
        type: String
    },
    definition: {
        type: String,
        required: 'definition required'
    },
    definitonHTMLFormat: {
        type: String
    }
}, { collection: 'card' } );

module.exports = mongoose.model('Card', CardSchema);
