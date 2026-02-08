import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    items, 
    totalItems, 
    totalPrice, 
    updateQuantity, 
    removeItem, 
    clearCart 
  } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    updateQuantity(productId, parseInt(newQuantity, 10));
  };

  const handleRemoveItem = (productId) => {
    removeItem(productId);
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your entire cart?')) {
      clearCart();
    }
  };

  if (items.length === 0) {
    return (
      <div className="page">
        <h1>Shopping Cart</h1>
        <div className="empty-cart">
          <p>Your cart is empty.</p>
          <a href="/products" className="continue-shopping-button">
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="cart-header">
        <h1>Shopping Cart</h1>
        <p className="cart-summary">
          {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
        </p>
      </div>

      <div className="cart-container">
        <div className="cart-items">
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-image">
                <img 
                  src={item.image || 'https://via.placeholder.com/100x100?text=Product'} 
                  alt={item.name} 
                />
              </div>
              
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">${item.price.toFixed(2)}</p>
              </div>

              <div className="item-quantity-control">
                <label htmlFor={`quantity-${item.id}`} className="quantity-label">
                  Qty:
                </label>
                <div className="quantity-controls">
                  <button 
                    className="quantity-btn decrease"
                    onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <input
                    id={`quantity-${item.id}`}
                    type="number"
                    min="1"
                    max="99"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                    className="quantity-input"
                  />
                  <button 
                    className="quantity-btn increase"
                    onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                    disabled={item.quantity >= 99}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="item-subtotal">
                <p className="subtotal-price">${(item.price * item.quantity).toFixed(2)}</p>
              </div>

              <div className="item-actions">
                <button 
                  className="remove-item-btn"
                  onClick={() => handleRemoveItem(item.id)}
                  title="Remove item"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="cart-summary-card">
          <div className="summary-content">
            <h2>Order Summary</h2>
            
            <div className="summary-row">
              <span>Subtotal ({totalItems} items)</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="summary-row">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            
            <div className="summary-row total">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            <button className="checkout-button">
              Proceed to Checkout
            </button>
            
            <button 
              className="clear-cart-btn"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>

            <a href="/products" className="continue-shopping-link">
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
