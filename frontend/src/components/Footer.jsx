import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconStethoscope, IconMapPin, IconPhone } from '@tabler/icons-react';
import './Footer.css';

const Footer = () => {
  const [tests, setTests] = useState([]);
  const [services, setServices] = useState([]);
  const [contact, setContact] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [testsRes, servicesRes, contactRes] = await Promise.all([
          axios.get('http://localhost:5000/api/tests'),
          axios.get('http://localhost:5000/api/services'),
          axios.get('http://localhost:5000/api/contact')
        ]);
        setTests(testsRes.data);
        setServices(servicesRes.data);
        setContact(contactRes.data);
      } catch (error) {
        console.error('Error fetching footer data:', error);
      }
    };
    fetchData();
  }, []);

  if (!contact) return null;

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid animate-fade-in-up">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <IconStethoscope color="#fff" size={16} />
              </div>
              <span className="logo-text" style={{ fontSize: '16px' }}>{contact.name}</span>
            </div>
            <p className="footer-desc">
              NABL-accredited diagnostic lab serving Gorakhpur since 2008. 
              200+ tests, home collection, digital reports.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <IconMapPin size={16} />
                <span>{contact.address}</span>
              </div>
              <div className="contact-item">
                <IconPhone size={16} />
                <span>{contact.phone} &middot; WhatsApp: {contact.whatsapp}</span>
              </div>
            </div>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Popular Tests</h4>
            <ul className="footer-links">
              {tests.filter(t => t.popular).slice(0, 4).map(test => (
                <li key={test.id}><a href="#">{test.name}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-links-group">
            <h4 className="footer-title">Services</h4>
            <ul className="footer-links">
              {services.slice(0, 4).map(service => (
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
