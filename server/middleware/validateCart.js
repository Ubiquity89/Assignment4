const validateCart = (req, res, next) => {
  const { productId, quantity } = req.body;

  // Check if productId is provided
  if (!productId) {
    return res.status(400).json({
      success: false,
      error: 'Product ID is required'
    });
  }

  // Check if productId is a valid number
  if (isNaN(parseInt(productId))) {
    return res.status(400).json({
      success: false,
      error: 'Product ID must be a valid number'
    });
  }

  // Check if quantity is provided
  if (quantity === undefined) {
    return res.status(400).json({
      success: false,
      error: 'Quantity is required'
    });
  }

  // Check if quantity is a valid number
  if (isNaN(parseInt(quantity))) {
    return res.status(400).json({
      success: false,
      error: 'Quantity must be a valid number'
    });
  }

  // Check if quantity is positive
  if (parseInt(quantity) <= 0) {
    return res.status(400).json({
      success: false,
      error: 'Quantity must be greater than 0'
    });
  }

  // Check if quantity is reasonable (max 100)
  if (parseInt(quantity) > 100) {
    return res.status(400).json({
      success: false,
      error: 'Quantity cannot exceed 100 items'
    });
  }

  next();
};

module.exports = validateCart;
