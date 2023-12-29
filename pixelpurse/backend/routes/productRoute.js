const {getAllProducts, createProduct, updateProduct} = require('../controllers/productController.js');
const express = require('express');
const router = express.Router();



router.route('/products').get(getAllProducts);
router.route('/products/new').post(createProduct);
router.route('/products/:id').put(updateProduct);
module.exports = router;