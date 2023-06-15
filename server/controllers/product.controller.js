const Product = require('../models/product.model');

// CREATE A PRODUCT
module.exports.createProduct = (req, res) => {
    Product.create(req.body)
        .then(newProduct => {
            res.json({ product: newProduct })
        })
        .catch((err) => {
            res.json({ msg: 'Failed to add product. Please try again later.', error: err})
        });
    }

// READ ALL PRODUCTS
module.exports.findAll = (req, res) => {
    Product.find()
        .then(allProducts => {
            console.log(allProducts);
            res.json(allProducts )
        })
        .catch ((err) => {
            console.log(err)
            res.json({ msg: 'Failed to obtain all products from the database. Please try again later.', error: err })
        });
}

// READ ONE PRODUCT
module.exports.findOne = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(products => res.json(products))
        .catch(err => res.json(err));
}

// UPDATE A PRODUCT


// DELETE A PRODUCT