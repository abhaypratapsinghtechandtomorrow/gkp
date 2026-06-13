import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconHome, IconFileReport, IconBuilding, IconStethoscope } from '@tabler/icons-react';
import './Services.css';

const iconMap = {
  'home': IconHome,
  'file-report': IconFileReport,
  'building': IconBuilding,
  'stethoscope': IconStethoscope
};

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/services');
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title animate-fade-in-up">Why Choose Us</h2>
        
        {loading ? (
          <div className="loading">Loading services...</div>
        ) : (
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
        )}
      </div>
    </section>
  );
};

export default Services;
