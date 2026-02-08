import { useState, useEffect } from 'react';
import { productService } from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const data = await productService.getProducts();
      setProducts(data);
      setError(null);
    } catch (err) {
      setError('Failed to fetch products. Please try again later.');
      console.error('Error fetching products:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    console.log('Added to cart:', product);
    // TODO: Implement cart functionality
  };

  if (loading) {
    return (
      <div className="page">
        <h1>Products</h1>
        <div className="loading">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h1>Products</h1>
        <div className="error">{error}</div>
        <button onClick={fetchProducts} className="retry-button">Retry</button>
      </div>
    );
  }

  return (
    <div className="page">
      <h1>Products</h1>
      <div className="product-grid">
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
              <button 
                className="add-to-cart-button"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
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
  );
};

export default ProductList;
