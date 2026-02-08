const About = () => {
  return (
    <div className="page-card">
      <h1 className="page-title">About ShopHub</h1>
      <p className="page-description">
        Your premier destination for quality products and exceptional shopping experience
      </p>
      
      <div className="about-content">
        <div className="about-section">
          <h2 className="section-title">Our Mission</h2>
          <p className="section-text">
            ShopHub is dedicated to providing customers with carefully curated products that combine 
            quality, style, and value. We believe in making online shopping simple, secure, and enjoyable.
          </p>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Story</h2>
          <p className="section-text">
            Founded in 2024, ShopHub started with a simple vision: to create an online marketplace 
            where customers can discover amazing products without the overwhelming complexity of modern 
            e-commerce. Our team of passionate tech enthusiasts and shopping experts work tirelessly 
            to bring you the best selection of electronics, accessories, and gadgets.
          </p>
        </div>

        <div className="about-stats">
          <div className="stat-item">
            <span className="stat-number">10K+</span>
            <span className="stat-label">Happy Customers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Premium Products</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Customer Support</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Satisfaction Guarantee</span>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">🎯</div>
              <h3>Quality First</h3>
              <p>Every product is carefully selected and tested for quality and performance.</p>
            </div>
           
            <div className="value-item">
              <div className="value-icon">🚀</div>
              <h3>Fast Delivery</h3>
              <p>Quick and reliable shipping to get your products to you as fast as possible.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">💬</div>
              <h3>Customer Care</h3>
              <p>Dedicated support team ready to help you with any questions or concerns.</p>
            </div>
          </div>
        </div>

        <div className="about-section">
          <h2 className="section-title">Why Choose ShopHub?</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Curated selection of premium products</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Competitive prices with regular deals</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Secure payment processing</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>30-day return policy</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="feature-item">
              <span className="checkmark">✓</span>
              <span>24/7 customer support</span>
            </div>
          </div>
        </div>

        <div className="about-cta">
          <h2 className="cta-title">Ready to Start Shopping?</h2>
          <p className="cta-subtitle">Join thousands of satisfied customers and discover the ShopHub difference</p>
          <a href="/products" className="cta-button">
            <span>Browse Products</span>
            <span className="cta-arrow">→</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
