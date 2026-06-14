import React from 'react';
import { IconBrandWhatsapp, IconPhoneCall } from '@tabler/icons-react';
import './FloatingContacts.css';

const FloatingContacts = () => {
  return (
    <div className="floating-contacts">
      <a 
        href="tel:+917704866570" 
        className="floating-widget call-widget"
        aria-label="Call Now"
      >
        <div className="floating-tooltip">Call Now</div>
        <div className="floating-icon-wrapper call-icon">
          <IconPhoneCall size={28} color="#ffffff" />
        </div>
      </a>

      <a 
        href="https://wa.me/917704866570?text=Hi,%20I%20would%20like%20to%20book%20a%20test." 
        target="_blank" 
        rel="noopener noreferrer" 
        className="floating-widget whatsapp-widget"
        aria-label="Book on WhatsApp"
      >
        <div className="floating-tooltip">Book on WhatsApp</div>
        <div className="floating-icon-wrapper whatsapp-icon">
          <IconBrandWhatsapp size={32} color="#ffffff" />
        </div>
      </a>
    </div>
  );
};

export default FloatingContacts;
