import React, { useState } from 'react';
import { IconHome, IconFileReport, IconBuilding, IconStethoscope } from '@tabler/icons-react';
import { services as mockServices } from '../data/mockData';
import './Services.css';

const iconMap = {
  'home': IconHome,
  'file-report': IconFileReport,
  'building': IconBuilding,
  'stethoscope': IconStethoscope
};

const Services = () => {
  const [services] = useState(mockServices);

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Why Choose Us</h2>
        
        <div className="services-grid">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon] || IconStethoscope;
              const delayClass = `delay-${(index % 3 + 1) * 100}`;
              return (
                <div key={service.id} className={`service-card animate-fade-in-up ${delayClass}`}>
                  <div className="service-icon-wrapper">
                    <IconComponent size={28} className="service-icon" />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.description}</p>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Services;
