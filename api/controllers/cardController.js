const mongoose= require('mongoose');
const Category = mongoose.model('Category');

exports.list_all_cards = (req, res) => {
  Category.findById(req.params.categoryId)
  .then( category => {
    res.json(category.cards)
  })
  .catch( err => { res.send(err) })
}

exports.create_a_card = (req, res) => {
  Category.findById(req.params.categoryId)
  .then( category => {
    category.cards.push({
      term: req.body.term,
      definition: req.body.definition
    })
    category.save().then( cards => {
      res.json(cards)
    })
  })
  .catch( err => { res.send(err) })
}

exports.read_a_card = (req, res) => {
  Category.findById(req.params.categoryId)
  .then( category => {
    const card = category.cards.find( card => card._id == req.params.cardId )
    res.json(card)
  })
  .catch( err => { res.send(err) })
}

exports.update_a_card = (req, res) => {
  Category.findOneAndUpdate(
    { _id: req.params.categoryId, 
    },
    { $set: {"cards.$[card]": req.body }},
    {
      new: true,
      arrayFilters: [
        { "card._id": req.params.cardId }
      ]
    }
  )
  .then( category => {
    const card = category.cards.find( card => card.term == req.body.term && card.definition == req.body.definition)
    res.json(card)
  })
  .catch( err => { res.send(err) })
};

exports.delete_a_card = (req, res) => {
  Category.findOneAndUpdate(
    { _id: req.params.categoryId },
    { 
      $pull: {cards: { _id: req.params.cardId }},
    },
    { new: true}
  )
  .then( (category) => {
    console.log(category)
    res.json(category);

  })
  .catch( err => {
    res.send(err)
  })
}
