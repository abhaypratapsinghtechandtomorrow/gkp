import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Tests from './components/Tests';
import Packages from './components/Packages';
import Organs from './components/Organs';
import CallbackBanner from './components/CallbackBanner';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import { CartProvider } from './context/CartContext';
import './styles/global.css';

const App = () => {
  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <CallbackBanner />
          <TrustSection />
          <Organs />
          <Packages />
          <Tests />
          <Services />
        </main>
        <Footer />
        <WhatsAppWidget />
        <CartSidebar />
        <LoginModal />
      </div>
    </CartProvider>
  );
};

export default App;
