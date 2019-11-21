const mongoose = require('mongoose');
const { Schema } = mongoose;

const CardSchema = new Schema({
    term: {
        type: String,
        required: 'term is required'
    },
    definition: {
        type: String,
        required: 'definition required'
    }
}, { collection: 'card' } );

module.exports = mongoose.model('Card', CardSchema);
