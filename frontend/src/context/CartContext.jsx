import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  useEffect(() => {
    // Load auth from local storage
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = (newToken, userData) => {
    setToken(newToken);
    setUser(userData);
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(userData));
    setIsLoginOpen(false);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const addToCart = (item) => {
    setCartItems(prev => {
      // Prevent duplicates
      if (prev.find(i => i.id === item.id)) return prev;
      return [...prev, item];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (itemId) => {
    setCartItems(prev => prev.filter(i => i.id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const checkout = async () => {
    if (!token) {
      setIsLoginOpen(true);
      return { success: false, message: 'Please login first' };
    }
    
    if (cartItems.length === 0) {
      return { success: false, message: 'Cart is empty' };
    }

    try {
      const payload = {
        items: cartItems.map(item => ({
          itemId: item.id.toString(),
          name: item.name,
          type: item.type || 'test',
          price: item.price
        })),
        totalAmount: getCartTotal()
      };

      await axios.post('http://localhost:5000/api/bookings', payload, {
        headers: { Authorization: `Bearer ${token}` }
      });
      
      clearCart();
      setIsCartOpen(false);
      return { success: true, message: 'Booking successful!' };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Checkout failed' };
    }
  };

  const value = {
    cartItems, addToCart, removeFromCart, clearCart, getCartTotal, checkout,
    user, token, login, logout,
    isCartOpen, setIsCartOpen,
    isLoginOpen, setIsLoginOpen
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
