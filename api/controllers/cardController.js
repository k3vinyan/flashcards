const mongoose= require('mongoose');
const Card = mongoose.model('Card');

exports.list_all_cards = (req, res) => {
    Card.find({}, (err, cards) => {
        if(err) res.send(err);
        res.json(cards);
    });
};

exports.create_a_card = (req, res) => {
    const newCard = new Card(req.body);
    newCard.save((err, card) => {
        if(err) res.send(err);
        console.log(card)
        res.json(card);
    });
};

exports.read_a_card = (req, res) => {
    Card.findById(req.params.cardId, (err, card) => {
        if(err) res.send(err);
        res.json(card);
    });
};

exports.update_a_card = (req, res) => {
    Card.findOneAndUpdate(
        { _id: req.params.cardId },
        req.body,
        { new: true },
        (err, card) => {
            if(err) res.send(err);
            res.json(card);
        }
    );
};

exports.delete_a_card = (req, res) => {
    Card.deleteOne({ _id: req.params.cardId}, err => {
        if(err) res.send(err);
        res.json({
            message: 'Card successfully deleted',
            _id: req.params.cardId
        });
    });
};



