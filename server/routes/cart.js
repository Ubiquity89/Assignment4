const express = require('express');
const { addToCart, getCart, removeFromCart, clearCart } = require('../controllers/cartController');
const validateCart = require('../middleware/validateCart');

const router = express.Router();

// Route to add item to cart
router.route('/').post(validateCart, addToCart);

// Route to get cart items
router.route('/').get(getCart);

// Route to remove specific item from cart
router.route('/:productId').delete(removeFromCart);

// Route to clear entire cart
router.route('/').delete(clearCart);

module.exports = router;
