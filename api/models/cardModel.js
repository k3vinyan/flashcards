const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
    term: {
        type: String,
        required: 'Term is required'
    },
    defintion: {
        type: String,
        required: 'definition required'
    }
}, { collection: 'card' } );

module.exports = mongoose.model('Card', CardSchema);