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
import FloatingContacts from './components/FloatingContacts';
import CartSidebar from './components/CartSidebar';
import LoginModal from './components/LoginModal';
import AdminDashboard from './components/AdminDashboard';
import { CartProvider } from './context/CartContext';
import './styles/global.css';

const App = () => {
  const [currentHash, setCurrentHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (currentHash === '#admin') {
    const localUserStr = localStorage.getItem('user');
    const localUser = localUserStr ? JSON.parse(localUserStr) : null;
    
    if (!localUser || !localUser.isAdmin) {
      window.location.hash = '';
      return null;
    }

    return (
      <CartProvider>
        <div className="app">
          <AdminDashboard />
        </div>
      </CartProvider>
    );
  }

  return (
    <CartProvider>
      <div className="app">
        <Navbar />
        <main>
          <Hero />
          <CallbackBanner />
          <Packages />
          <Organs />
          <TrustSection />
          <Tests />
          <Services />
        </main>
        <Footer />
        <FloatingContacts />
        <CartSidebar />
        <LoginModal />
      </div>
    </CartProvider>
  );
};

export default App;
