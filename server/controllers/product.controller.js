const Product = require('../models/product.model');

module.exports.index = (req, res) => {
    res.json
}

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
            res.json({ products: allProducts })
        })
        .catch ((err) => {
            res.json({ msg: 'Failed to obtain all products from the database. Please try again later.', error: err })
        });
}

// READ ONE PRODUCT


// UPDATE A PRODUCT


// DELETE A PRODUCT