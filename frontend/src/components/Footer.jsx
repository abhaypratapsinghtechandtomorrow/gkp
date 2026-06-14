import React, { useState } from 'react';
import { IconStethoscope, IconMapPin, IconPhone, IconMail, IconBrandWhatsapp } from '@tabler/icons-react';
import { tests as mockTests, services as mockServices, contact as mockContact } from '../data/mockData';
import { useCart } from '../context/CartContext';
import './Footer.css';

const Footer = () => {
  const [quickTests] = useState(mockTests.filter(t => t.popular).slice(0, 4));
  const [quickServices] = useState(mockServices.slice(0, 4));
  const [contactInfo] = useState(mockContact);
  const { user } = useCart();

  if (!contactInfo) return <footer className="footer"><div className="container">Loading...</div></footer>;

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid animate-fade-in-up">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <IconStethoscope color="#fff" size={16} />
              </div>
              <span className="logo-text" style={{ fontSize: '16px' }}>{contactInfo.name}</span>
            </div>
            <p className="footer-desc">
              NABL-accredited diagnostic lab serving Gorakhpur since 2008. 
              200+ tests, home collection, digital reports.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <IconMapPin size={16} />
                <span>{contactInfo.address}</span>
              </div>
              <div className="contact-item">
                <IconPhone size={16} />
                <span>{contactInfo.phone} &middot; WhatsApp: {contactInfo.whatsapp}</span>
              </div>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Popular Tests</h4>
            <ul className="footer-links">
              {quickTests.map(test => (
                <li key={test.id}><a href="#">{test.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {quickServices.map(service => (
                <li key={service.id}><a href="#">{service.title}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Refund Policy</a></li>
              {user && user.isAdmin && (
                <li><a href="#admin" style={{ color: '#00A0A8' }}>Admin Panel</a></li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Gorakhpur Diagnostic Centre. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
