import React from 'react';
import { IconBrandWhatsapp } from '@tabler/icons-react';
import './WhatsAppWidget.css';

const WhatsAppWidget = () => {
  return (
    <a 
      href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20a%20test." 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-widget"
      aria-label="Book on WhatsApp"
    >
      <div className="whatsapp-icon-wrapper">
        <IconBrandWhatsapp size={32} color="#ffffff" />
      </div>
      <div className="whatsapp-tooltip">Book on WhatsApp</div>
    </a>
  );
};

export default WhatsAppWidget;
