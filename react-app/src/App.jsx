import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import ProductList from './pages/ProductList';
import './styles/main.css';

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<ProductList />} />
            </Routes>
          </main>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App
