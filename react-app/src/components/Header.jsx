import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="header">
      <div 
        className="navbar-inner"
        style={{
          width: '100%',
          padding: '16px 24px',
          boxSizing: 'border-box'
        }}
      >
        <nav>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            Cart {totalItems > 0 && <span className="cart-count">({totalItems})</span>}
          </Link>
          <Link to="/about" className="nav-link">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
