const categoryBuilder = require('../controllers/categoryController');
const cardBuilder = require('../controllers/cardController');

module.exports = app => {
  app
    .route('/categories')
    .get(categoryBuilder.list_all_categories)
    .post(categoryBuilder.create_category);
  app
    .route('/categories/:categoryId')
    .get(categoryBuilder.read_category)
    .put(categoryBuilder.update_category)
    .delete(categoryBuilder.delete_category);
  app
    .route('/categories/:categoryId/cards')
    .get(cardBuilder.list_all_cards)
    .post(cardBuilder.create_a_card);
  app
    .route('/categories/:categoryId/cards/:cardId')
    .get(cardBuilder.read_a_card)
    .put(cardBuilder.update_a_card)
    .delete(cardBuilder.delete_a_card);
};
