const ProductController = require('../controllers/product.controller');

module.exports = app => {
    // CREATE NEW PRODUCT
    app.post('/api/products', ProductController.createProduct);

    // ALL PRODUCTS PAGE
    app.get('/api/products', ProductController.findAll);

    // ONE PRODUCT PAGE
    app.get('/api/products/:id', ProductController.findOne);

    // UPDATE PRODUCT
    app.patch('/api/products/:id', ProductController.updateProduct);

    // DELETE PRODUCT
    app.delete('/api/products/:id', ProductController.deleteProduct);
}