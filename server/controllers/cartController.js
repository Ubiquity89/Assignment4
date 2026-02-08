const products = require('../models/Product');

// In-memory cart storage (in production, use database)
let cart = [];

// @desc    Add item to cart
// @route   POST /api/cart
// @access  Public
const addToCart = (req, res) => {
  try {
    const { productId, quantity } = req.body;

    // Check if product exists
    const product = products.find(p => p.id === parseInt(productId));
    if (!product) {
      return res.status(404).json({
        success: false,
        error: 'Product not found'
      });
    }

    // Check if item already exists in cart
    const existingItemIndex = cart.findIndex(item => item.productId === parseInt(productId));
    
    if (existingItemIndex !== -1) {
      // Update quantity of existing item
      cart[existingItemIndex].quantity += parseInt(quantity);
    } else {
      // Add new item to cart
      cart.push({
        productId: parseInt(productId),
        quantity: parseInt(quantity),
        addedAt: new Date()
      });
    }

    res.status(200).json({
      success: true,
      message: 'Item added to cart successfully',
      data: {
        productId: parseInt(productId),
        quantity: parseInt(quantity),
        productName: product.name,
        productPrice: product.price
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Get cart items
// @route   GET /api/cart
// @access  Public
const getCart = (req, res) => {
  try {
    // Get cart items with product details
    const cartItems = cart.map(item => {
      const product = products.find(p => p.id === item.productId);
      return {
        productId: item.productId,
        quantity: item.quantity,
        product: product ? {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        } : null,
        addedAt: item.addedAt
      };
    }).filter(item => item.product !== null);

    // Calculate totals
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

    res.status(200).json({
      success: true,
      data: {
        items: cartItems,
        totalItems,
        totalPrice: parseFloat(totalPrice.toFixed(2))
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Remove item from cart
// @route   DELETE /api/cart/:productId
// @access  Public
const removeFromCart = (req, res) => {
  try {
    const productId = parseInt(req.params.productId);
    
    cart = cart.filter(item => item.productId !== productId);

    res.status(200).json({
      success: true,
      message: 'Item removed from cart successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

// @desc    Clear cart
// @route   DELETE /api/cart
// @access  Public
const clearCart = (req, res) => {
  try {
    cart = [];

    res.status(200).json({
      success: true,
      message: 'Cart cleared successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
};

module.exports = {
  addToCart,
  getCart,
  removeFromCart,
  clearCart
};
