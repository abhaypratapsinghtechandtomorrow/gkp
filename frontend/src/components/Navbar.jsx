import React, { useState, useEffect } from 'react';
import { IconStethoscope, IconMenu2, IconX, IconShoppingCart, IconMapPinFilled, IconPhone, IconUser, IconChevronDown, IconHome, IconMoonFilled, IconSunFilled } from '@tabler/icons-react';
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

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="healthians-header animate-fade-in-up">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-container">
          <a href="/" className="navbar-logo">
            <div className="logo-icon">
              <IconStethoscope color="var(--primary-color)" size={36} stroke={2} />
            </div>
            <span className="logo-text" style={{ fontSize: '20px' }}>Gorakhpur Diagnostic Centre</span>
          </a>
          
          <div className="top-bar-middle">
            <div className="location-selector" style={{ cursor: 'default' }}>
              <IconMapPinFilled size={20} color="#F16948" />
              <div className="location-text">
                <span className="loc-label">Service Area</span>
                <span className="loc-value">Gorakhpur</span>
              </div>
            </div>

            <div className="top-action-item clickable" onClick={(e) => { e.preventDefault(); user ? logout() : setIsLoginOpen(true); }}>
              <IconUser size={20} color="#727272" />
              <div className="action-text">
                <span className="action-label">{user ? `Hi, ${user.name}` : 'Welcome'}</span>
                <span className="action-value">{user ? `Logout` : 'Login / Signup'}</span>
              </div>
            </div>

            <div className="top-action-item">
              <IconPhone size={20} color="#727272" />
              <div className="action-text">
                <span className="action-label">Call Us</span>
                <span className="action-value">+917704866570</span>
              </div>
            </div>
            
            <button className="theme-toggle-btn btn btn-outline" onClick={toggleTheme} aria-label="Toggle Dark Mode" style={{ padding: '8px', border: 'none', background: 'var(--background-tertiary)' }}>
              {isDarkMode ? <IconSunFilled size={20} color="#F16948" /> : <IconMoonFilled size={20} color="#00A0A8" />}
            </button>
          </div>
          
          <div className="top-bar-right-mobile">
            <button className="theme-toggle-btn btn" onClick={toggleTheme} style={{ padding: '8px', background: 'transparent', border: 'none', marginRight: '8px' }}>
               {isDarkMode ? <IconSunFilled size={20} color="#F16948" /> : <IconMoonFilled size={20} color="#00A0A8" />}
            </button>
            <button className="mobile-menu-btn" onClick={toggleMenu}>
              {isOpen ? <IconX size={24} color="var(--primary-color)" /> : <IconMenu2 size={24} color="var(--primary-color)" />}
            </button>
          </div>
        </div>
      </div>

      {/* Secondary Navbar */}
      <nav className="secondary-navbar">
        <div className="container sec-nav-container">
          <ul className={`sec-nav-links ${isOpen ? 'active' : ''}`}>
            <li><a href="/" className="nav-home-icon"><IconHome size={18} /></a></li>
            <li><a href="#full-body">Full Body Checkup <IconChevronDown size={14} /></a></li>
            <li><a href="#fever">Fever <IconChevronDown size={14} /></a></li>
            <li><a href="#heart">Heart <IconChevronDown size={14} /></a></li>
            <li><a href="#thyroid">Thyroid <IconChevronDown size={14} /></a></li>
            <li><a href="#diabetes">Diabetes <IconChevronDown size={14} /></a></li>
            <li><a href="#allergy">Allergy <IconChevronDown size={14} /></a></li>
            <li><a href="#dna" className="new-badge-link">DNA Test <IconChevronDown size={14} /><span className="new-badge">NEW</span></a></li>
            
            <li className="mobile-only-cart">
               <button className="btn nav-cart-btn-mobile" onClick={() => setIsCartOpen(true)}>
                <IconShoppingCart size={20} />
                <span>Cart ({cartItems.length})</span>
              </button>
            </li>
          </ul>
          
          <div className="desktop-cart">
             <button className="btn nav-cart-btn-white" onClick={() => setIsCartOpen(true)}>
              <IconShoppingCart size={20} />
              {cartItems.length > 0 && <span className="cart-badge-white">{cartItems.length}</span>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
