import { useState, useEffect } from 'react';
import { productService } from '../services/productService';
import { useCart } from '../context/CartContext';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addItem, isInCart, getItemQuantity } = useCart();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await productService.getProducts();
      setProducts(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addItem(product);
  };

  if (loading) {
    return (
      <div className="page">
        <div className="products-container">
          <h1 className="page-title">Products</h1>
          <div className="loading">Loading products...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <div className="products-container">
          <h1 className="page-title">Products</h1>
          <div className="error">{error}</div>
          <button onClick={fetchProducts} className="retry-button">Retry</button>
        </div>
      </div>
    );
  }

  return (
    <div className="page">
      <div className="products-container">
        <h1 className="page-title">Products</h1>
        <p className="page-description">Discover our amazing collection of premium products</p>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img 
                  src={product.image || 'https://via.placeholder.com/300x200?text=Product'} 
                  alt={product.name} 
                />
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-price">${product.price?.toFixed(2) || '0.00'}</p>
                {isInCart(product.id) && (
                  <p className="item-quantity">In cart: {getItemQuantity(product.id)}</p>
                )}
                <button 
                  className="add-to-cart-button"
                  onClick={() => handleAddToCart(product)}
                >
                  {isInCart(product.id) ? 'Add Another' : 'Add to Cart'}
                </button>
              </div>
            </div>
          ))}
        </div>
        {products.length === 0 && (
          <div className="no-products">
            <p>No products available at the moment.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductList;
