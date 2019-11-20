const mongoose = require('mongoose');
const Category = mongoose.model('Category');

exports.list_of_categories = (req, res) => {
    Category.find({}, (err, categories) => {
        if(err) res.send(err);
        res.json(categories);
    });
};

exports.create_categories = (req, res) => {
    const saveCategory = new Category(res.body);
    saveCategory.save( (err, res)=> {
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
    Category.deleteOne({ _id: req.params.categoryId }, err => {
        if(err) res.send(err);
        res.json({
            message: 'Category successfully deleted',
            _id: req.params.categoryId
        })
    })
}