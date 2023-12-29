const {getAllProducts, createProduct} = require('../controllers/productController.js');
const express = require('express');
const router = express.Router();



router.route('/products').get(getAllProducts);
router.route('/products/new').post(createProduct);

module.exports = router;