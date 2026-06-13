import React from 'react';
import { IconBuildingHospital, IconHeartRateMonitor, IconUsers, IconCertificate, IconClock, IconFileDescription, IconPhoneCall } from '@tabler/icons-react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section">
      <div className="container">
        <div className="top-cards">
          <div className="info-card panels-card">
            <div className="info-card-icon panels-icon">
              <IconBuildingHospital size={24} color="#00A0A8" />
            </div>
            <div className="info-card-text">
              <h4>We are now empaneled on Government Panels for Health Tests</h4>
              <p>For in-service or retired govt. employees across CGHS, DGEHS, ESIC & Relevant Dept, AIR INDIA, CAPF.</p>
              <button className="info-btn btn-yellow"><IconPhoneCall size={16}/> Call us: +91-9289902266</button>
            </div>
          </div>
          
          <div className="info-card karma-card">
            <div className="info-card-icon karma-icon">
              <IconHeartRateMonitor size={24} color="#F16948" />
            </div>
            <div className="info-card-text">
              <h4>Unlock Your Health Score with HealthKarma!</h4>
              <p>Uncover potential health risks and get custom test recommendation based on your lifestyle and habits.</p>
              <button className="info-btn btn-orange">Check your health score &rarr;</button>
            </div>
          </div>
        </div>

        <div className="why-trust-us">
          <div className="trust-title">
            <h3>Why <strong>1 Crore+</strong> Indians</h3>
            <p>Trust Healthians Labs</p>
          </div>
          
          <div className="trust-features">
            <div className="trust-feature">
              <IconCertificate size={32} color="#00A0A8" className="feature-icon" />
              <span>CAP & NABL<br/>Accredited Labs</span>
            </div>
            <div className="trust-feature">
              <IconClock size={32} color="#00A0A8" className="feature-icon" />
              <span>On Time Sample<br/>Collection</span>
            </div>
            <div className="trust-feature">
              <IconFileDescription size={32} color="#00A0A8" className="feature-icon" />
              <span>Smart Reports<br/>in 6 Hours</span>
            </div>
            <div className="trust-feature">
              <IconPhoneCall size={32} color="#00A0A8" className="feature-icon" />
              <span>Free Report<br/>Consultation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
