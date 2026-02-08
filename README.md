# 🛍️ ShopHub - Modern E-Commerce Platform

A full-stack e-commerce application built with React and Node.js, featuring a modern UI, responsive design, and complete shopping cart functionality.

## 🚀 Live Demo

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=react)](https://your-demo-url.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github)](https://github.com/Ubiquity89/Assignment4)

## ✨ Features

### 🛒 Shopping Experience
- **Product Catalog**: Browse through our curated collection of premium products
- **Product Cards**: Beautiful cards with real product images, prices, and descriptions
- **Shopping Cart**: Add items, update quantities, and remove products
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

### 🎨 User Interface
- **Modern Design**: Clean, professional interface with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **No UI Libraries**: Pure CSS implementation for maximum customization
- **Accessibility**: Semantic HTML and keyboard navigation support

### ⚡ Technical Features
- **Full-Stack Architecture**: React frontend + Node.js backend
- **RESTful API**: Clean API endpoints for products and cart management
- **State Management**: Context API for efficient state handling
- **Docker Support**: Complete containerization for easy deployment

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern, component-based UI framework
- **Vite** - Lightning-fast build tool and dev server
- **CSS3** - Pure CSS with modern features and animations
- **Axios** - HTTP client for API communication
- **Context API** - State management solution

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, minimalist web framework
- **CORS** - Cross-origin resource sharing support
- **In-Memory Storage** - Efficient data storage for products

### DevOps
- **Docker** - Containerization for consistent environments
- **Docker Compose** - Multi-container orchestration
- **Git** - Version control and collaboration

## 📦 Project Structure

```
Assignment4/
├── react-app/                 # Frontend application
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── Header.jsx   # Navigation and cart
│   │   │   └── ...         # Other components
│   │   ├── pages/           # Page components
│   │   │   ├── Home.jsx     # Landing page
│   │   │   ├── About.jsx    # About page with rich content
│   │   │   ├── ProductList.jsx # Product catalog
│   │   │   └── Cart.jsx     # Shopping cart
│   │   ├── context/         # State management
│   │   ├── services/        # API service layer
│   │   └── styles/         # CSS styling
│   ├── package.json
│   └── Dockerfile
├── server/                  # Backend application
│   ├── controllers/         # Business logic
│   ├── routes/             # API endpoints
│   ├── middleware/         # Validation & error handling
│   ├── models/             # Data models
│   ├── server.js           # Express server
│   ├── package.json
│   └── Dockerfile
├── docker-compose.yml       # Multi-container setup
└── README.md              # This file
```

## 🚀 Quick Start

### Prerequisites
- **Node.js** (v18 or higher)
- **Docker Desktop** (for containerized deployment)

### Option 1: Docker (Recommended)
```bash
# Clone the repository
git clone https://github.com/Ubiquity89/Assignment4.git
cd Assignment4

# Start the entire application
docker-compose up

# Access the application
# Frontend: http://localhost:3000
# Backend API: http://localhost:5000
```

### Option 2: Manual Setup
```bash
# Clone the repository
git clone https://github.com/Ubiquity89/Assignment4.git
cd Assignment4

# Start Backend
cd server
npm install
npm run dev

# Start Frontend (new terminal)
cd ../react-app
npm install
npm run dev
```

## 📱 Application Screenshots

### Home Page
- Modern hero section with call-to-action
- Feature highlights and statistics
- Smooth animations and transitions

### Products Page
- Grid layout with product cards
- Real product images and descriptions
- Add to cart functionality
- Responsive design for all devices

### Shopping Cart
- Item quantity management
- Remove items functionality
- Real-time price calculations
- Clean, intuitive interface

### About Page
- Company story and mission
- Statistics and achievements
- Core values with icons
- Interactive features list

## 🔧 API Endpoints

### Products
- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product by ID

### Cart
- `POST /api/cart` - Add item to cart
- `GET /api/cart` - Get cart contents
- `DELETE /api/cart/:productId` - Remove item from cart
- `DELETE /api/cart` - Clear entire cart

## 🎯 Key Features Implemented

### ✅ Frontend Requirements Met
- [x] Product listing page with API integration
- [x] Product cards with image, name, price, Add to Cart button
- [x] Cart page with quantity update and remove item options
- [x] State management using Context API
- [x] Responsive design for all screen sizes
- [x] Functional components only
- [x] No UI libraries (pure CSS)
- [x] Clean folder structure
- [x] Meaningful Git commits

### ✅ Backend Requirements Met
- [x] Node.js + Express server
- [x] GET /products API endpoint
- [x] POST /cart API endpoint
- [x] Validation middleware
- [x] Proper error handling
- [x] In-memory data storage
- [x] Environment variables using .env

### ✅ Docker Requirements Met
- [x] Dockerfile for frontend
- [x] Dockerfile for backend
- [x] docker-compose.yml configuration
- [x] Application runs with `docker-compose up`

## 🎨 Design Highlights

### Visual Features
- **Gradient Backgrounds**: Modern color schemes throughout
- **Card Animations**: Smooth hover effects and transitions
- **Responsive Grid**: Adaptive layout for all devices
- **Typography**: Clean, readable font hierarchy
- **Color Palette**: Consistent brand colors

### User Experience
- **Intuitive Navigation**: Clear menu structure
- **Loading States**: Smooth loading indicators
- **Error Handling**: User-friendly error messages
- **Micro-interactions**: Button hover states and transitions

## 🔮 Future Enhancements

### Planned Features
- [ ] User authentication and profiles
- [ ] Product search and filtering
- [ ] Payment integration
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard

### Technical Improvements
- [ ] MongoDB database integration
- [ ] Redis for session management
- [ ] JWT authentication
- [ ] Automated testing
- [ ] CI/CD pipeline
- [ ] Performance optimization

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to the branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **React Team** - For the amazing UI framework
- **Express.js** - For the robust backend framework
- **Unsplash** - For beautiful product images
- **Docker** - For containerization technology

## 📞 Contact

- **GitHub**: [@Ubiquity89](https://github.com/Ubiquity89)
- **Email**: your-email@example.com
- **Project Link**: [https://github.com/Ubiquity89/Assignment4](https://github.com/Ubiquity89/Assignment4)

---

<div align="center">
  <p>Made with ❤️ by ShopHub Team</p>
  <p>⭐ Star this repository if it helped you!</p>
</div>
