const cardBuilder = require('../controllers/cardController');

module.exports = app => {
    app
        .route('/cards')
        .get(cardBuilder.list_all_cards)
        .post(cardBuilder.create_a_card);
    
    app
        .route('/cards/:cardId')
        .get(cardBuilder.read_a_card)
        .put(cardBuilder.update_a_card)
        .delete(cardBuilder.delete_a_card);
};