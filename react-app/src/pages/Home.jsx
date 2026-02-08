const Home = () => {
  return (
    <div className="page-card">
      <div className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>🔥 New Collection 2024</span>
          </div>
          <h1 className="hero-title">ShopHub Premium</h1>
          <p className="hero-subtitle">Quality products, unbeatable prices</p>
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10K+</span>
              <span className="stat-label">Happy Customers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Products</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">24/7</span>
              <span className="stat-label">Support</span>
            </div>
          </div>
          <div className="hero-buttons">
            <a href="/products" className="hero-button primary">
              <span>Shop Now</span>
              <span className="button-arrow">→</span>
            </a>
            <a href="/about" className="hero-button secondary">Learn More</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-cards-container">
            <div className="hero-image-placeholder">
              <div className="floating-card card-1">
                <div className="card-image">📱</div>
                <div className="card-title">Electronics</div>
                <div className="card-price">From $29</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-image">⌚</div>
                <div className="card-title">Accessories</div>
                <div className="card-price">From $19</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-image">💻</div>
                <div className="card-title">Gadgets</div>
                <div className="card-price">From $39</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="section-divider"></div>
      
      <div className="features-section">
        <h2 className="section-title">Why Choose ShopHub?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>Free Shipping</h3>
            <p>On orders over $50</p>
            <div className="feature-badge">Fast Delivery</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>Premium Quality</h3>
            <p>Carefully curated products</p>
            <div className="feature-badge">Top Rated</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>Secure Payment</h3>
            <p>100% secure checkout</p>
            <div className="feature-badge">SSL Protected</div>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔄</div>
            <h3>Easy Returns</h3>
            <p>30-day return policy</p>
            <div className="feature-badge">Hassle Free</div>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Shopping?</h2>
          <p className="cta-subtitle">Join thousands of satisfied customers today</p>
          <a href="/products" className="cta-button">
            <span>Start Shopping Now</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
        <div className="cta-visual">
          <div className="cta-dots">
            <div className="dot dot-1"></div>
            <div className="dot dot-2"></div>
            <div className="dot dot-3"></div>
            <div className="dot dot-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
