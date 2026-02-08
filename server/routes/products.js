const express = require('express');
const { getProducts, getProductById } = require('../controllers/productController');

const router = express.Router();

// Route to get all products
router.route('/').get(getProducts);

// Route to get single product by ID
router.route('/:id').get(getProductById);

module.exports = router;
