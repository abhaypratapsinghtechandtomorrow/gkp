import React from 'react';
import { IconSearch, IconMotorbike, IconFileDescription, IconUserHeart } from '@tabler/icons-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container animate-fade-in-up">
        <div className="hero-content">
          <div className="hero-text-block">
            <h1 className="hero-title">CXO SUPER SPECIALITY HEALTH<br/>SCREENING PACKAGE</h1>
            <div className="hero-price-block">
              <div className="tests-count">
                <span>TOTAL TESTS</span>
                <span className="count-value">317</span>
              </div>
              <div className="price-info">
                <span>AT JUST</span>
                <span className="price-value">₹7999</span>
              </div>
            </div>
            
            <button className="book-now-pill">Book Now &raquo;</button>
          </div>
          
          <div className="hero-search-area">
            <div className="search-pill">
              <input 
                type="text" 
                placeholder="Find your Package/Test/Scans" 
                className="search-input"
              />
              <button className="btn search-btn-orange">Search</button>
            </div>
            
            <div className="trust-markers">
              <div className="trust-marker">
                <div className="trust-icon"><IconMotorbike size={20} color="#F16948" /></div>
                <div className="trust-text">
                  <strong>Free Sample Collection</strong>
                  <span>within 60 Mins of Booking*</span>
                </div>
              </div>
              <div className="trust-marker">
                <div className="trust-icon"><IconFileDescription size={20} color="#F16948" /></div>
                <div className="trust-text">
                  <strong>Smart Reports</strong>
                  <span>with Real-Time Updates</span>
                </div>
              </div>
              <div className="trust-marker">
                <div className="trust-icon"><IconUserHeart size={20} color="#F16948" /></div>
                <div className="trust-text">
                  <strong>Free Report</strong>
                  <span>Counselling</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
