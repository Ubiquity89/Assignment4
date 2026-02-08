import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/products" className="nav-link">Products</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
};

export default Header;
