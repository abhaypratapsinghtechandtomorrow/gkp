import React, { useState, useEffect } from 'react';
import { IconStethoscope, IconMenu2, IconX, IconSun, IconMoon, IconShoppingCart } from '@tabler/icons-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { cartItems, setIsCartOpen, setIsLoginOpen, user, logout } = useCart();

  useEffect(() => {
    // Check system preference or localStorage
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    if (isDarkMode) {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    } else {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="healthians-header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-left">
            <span className="location-selector">
              <IconStethoscope size={16} />
              Gorakhpur <span className="arrow-down">▼</span>
            </span>
          </div>
          <div className="top-bar-right">
            <a href="tel:05512200100" className="top-contact">0551-2200100</a>
            <a href="#" className="top-link">Download App</a>
            <a href="#" className="top-link login-btn" onClick={(e) => { e.preventDefault(); user ? logout() : setIsLoginOpen(true); }}>
              {user ? `Logout (${user.name.split(' ')[0]})` : 'Login / Sign up'}
            </a>
            <button className="theme-toggle-btn" onClick={toggleTheme} aria-label="Toggle Dark Mode">
              {isDarkMode ? <IconSun size={16} /> : <IconMoon size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="navbar">
        <div className="container navbar-container">
          <a href="/" className="navbar-logo">
            <img src="/logo.png" alt="Logo" className="healthians-logo-fallback" onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }} />
            <div className="logo-fallback" style={{display: 'none', alignItems: 'center', gap: '8px'}}>
              <div className="logo-icon">
                <IconStethoscope color="#fff" size={24} />
              </div>
              <span className="logo-text">Gorakhpur Diagnostic</span>
            </div>
          </a>

          <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
            <a href="#packages" className="nav-link" onClick={() => setIsOpen(false)}>Packages</a>
            <a href="#tests" className="nav-link" onClick={() => setIsOpen(false)}>Tests</a>
            <a href="#organs" className="nav-link" onClick={() => setIsOpen(false)}>Organs</a>
            <a href="#services" className="nav-link" onClick={() => setIsOpen(false)}>Services</a>
            
            <button className="btn nav-btn" onClick={() => setIsCartOpen(true)} style={{ position: 'relative', background: 'transparent', color: 'var(--primary-color)', border: '1px solid var(--primary-color)', padding: '6px 12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <IconShoppingCart size={20} />
              <span>Cart</span>
              {cartItems.length > 0 && (
                <span style={{ position: 'absolute', top: '-8px', right: '-8px', background: 'var(--danger)', color: 'white', borderRadius: '50%', width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>
                  {cartItems.length}
                </span>
              )}
            </button>
            <button className="btn btn-primary nav-btn">Book Now</button>
          </div>

          <button className="mobile-menu-btn" onClick={toggleMenu}>
            {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
