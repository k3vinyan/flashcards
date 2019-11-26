const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.list_all_categories = (req, res) => {
    Category.find({}, (err, categories) => {
        if(err) res.send(err);
        res.json(categories);
    });
};

exports.create_category = (req, res) => {
    const saveCategory = new Category(req.body);
    saveCategory.save( (err, category)=> {
        if(err) res.send(err);
        res.json(category);
    });
};

exports.read_category = (req, res) => {
    Category.findById(req.params.categoryId, (err, category) => {
        if(err) res.send(err);
        res.json(category);
    });
};

exports.update_category = (req, res) => {
   console.log(req.body)
    Category.findOneAndUpdate(
        {_id: req.params.categoryId},
        req.body,
        { new: true },
        (err, category) => {
            if(err) res.send(err);
            res.json(category);
        }
    )
}

exports.delete_category = (req, res) => {
    Category.deleteOne({ _id: req.params.categoryId }, (err) => {
        if(err) res.send(err);
        res.json({
            message: 'Category successfully deleted',
            _id: req.params.categoryId
        })
    })
}

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
        $pull: {cards: { _id: req.params.cardId }}
      }
    )
    .then( () => {
      res.json({
        message: 'Card successfully deleted',
        _id: req.params.cardId
      });
    })
    .catch( err => {
      res.send(err)
    })
  }
  