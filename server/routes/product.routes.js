const ProductController = require('../controllers/product.controller');

module.exports = app => {
    // CREATE NEW PRODUCT
    app.post('/api/products', ProductController.createProduct);

    // ALL PRODUCTS PAGE
}