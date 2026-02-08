import { createContext, useContext, useReducer } from 'react';

// Action types
const CART_ACTIONS = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM',
  UPDATE_QUANTITY: 'UPDATE_QUANTITY',
  CLEAR_CART: 'CLEAR_CART',
};

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

// Helper functions
const calculateTotals = (items) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

// Find item in cart
const findCartItem = (items, productId) => {
  return items.findIndex(item => item.id === productId);
};

// Reducer function
const cartReducer = (state, action) => {
  switch (action.type) {
    case CART_ACTIONS.ADD_ITEM: {
      const { product } = action.payload;
      const existingItemIndex = findCartItem(state.items, product.id);
      
      let newItems;
      if (existingItemIndex !== -1) {
        // Item exists, update quantity
        newItems = state.items.map((item, index) => {
          if (index === existingItemIndex) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
      } else {
        // Add new item
        const newItem = {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        };
        newItems = [...state.items, newItem];
      }
      
      const { totalItems, totalPrice } = calculateTotals(newItems);
      
      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      };
    }
    
    case CART_ACTIONS.REMOVE_ITEM: {
      const { productId } = action.payload;
      const newItems = state.items.filter(item => item.id !== productId);
      const { totalItems, totalPrice } = calculateTotals(newItems);
      
      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      };
    }
    
    case CART_ACTIONS.UPDATE_QUANTITY: {
      const { productId, quantity } = action.payload;
      
      if (quantity <= 0) {
        // Remove item if quantity is 0 or less
        const newItems = state.items.filter(item => item.id !== productId);
        const { totalItems, totalPrice } = calculateTotals(newItems);
        
        return {
          ...state,
          items: newItems,
          totalItems,
          totalPrice,
        };
      }
      
      const newItems = state.items.map(item => {
        if (item.id === productId) {
          return {
            ...item,
            quantity,
          };
        }
        return item;
      });
      
      const { totalItems, totalPrice } = calculateTotals(newItems);
      
      return {
        ...state,
        items: newItems,
        totalItems,
        totalPrice,
      };
    }
    
    case CART_ACTIONS.CLEAR_CART: {
      return {
        ...initialState,
      };
    }
    
    default:
      return state;
  }
};

// Create context
const CartContext = createContext();

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Action creators
  const addItem = (product) => {
    dispatch({
      type: CART_ACTIONS.ADD_ITEM,
      payload: { product },
    });
  };
  
  const removeItem = (productId) => {
    dispatch({
      type: CART_ACTIONS.REMOVE_ITEM,
      payload: { productId },
    });
  };
  
  const updateQuantity = (productId, quantity) => {
    dispatch({
      type: CART_ACTIONS.UPDATE_QUANTITY,
      payload: { productId, quantity },
    });
  };
  
  const clearCart = () => {
    dispatch({
      type: CART_ACTIONS.CLEAR_CART,
    });
  };
  
  // Computed values
  const getItemQuantity = (productId) => {
    const item = state.items.find(item => item.id === productId);
    return item ? item.quantity : 0;
  };
  
  const isInCart = (productId) => {
    return state.items.some(item => item.id === productId);
  };
  
  const value = {
    // State
    ...state,
    
    // Actions
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    
    // Computed values
    getItemQuantity,
    isInCart,
  };
  
  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
