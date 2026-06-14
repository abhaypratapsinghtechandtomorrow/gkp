import React, { useState } from 'react';
import { IconClockHour4, IconHeartbeat, IconUserCheck, IconPlus, IconCheck, IconDiscount2 } from '@tabler/icons-react';
import { useCart } from '../context/CartContext';
import { packages as mockPackages } from '../data/mockData';
import './Packages.css';

const categories = ['Full Body Checkup', 'Fever', 'STD', 'Vitamins', 'Diabetes', 'Heart', 'Thyroid', 'Kidney', 'Allergy'];

const Packages = () => {
  const [packages] = useState(mockPackages);
  const [activeTab, setActiveTab] = useState('Full Body Checkup');
  const { addToCart } = useCart();

  const displayPackages = packages.filter(pkg => pkg.category === activeTab);

  return (
    <section id="packages" className="section packages">
      <div className="container">
        <h2 className="packages-main-title animate-fade-in-up">Tests for {activeTab} in Gorakhpur</h2>
        
        <div className="packages-tabs animate-fade-in-up delay-100">
          {categories.map(cat => (
            <button 
              key={cat} 
              className={`package-tab ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="advanced-packages-grid">
          {displayPackages.map((pkg, idx) => (
            <div 
              key={pkg.id} 
              className="advanced-card animate-fade-in-up" 
              style={{ animationDelay: `${(idx + 2) * 100}ms` }}
            >
              <div className="adv-card-header">
                <h3 className="adv-card-title">{pkg.name}</h3>
                <div className="adv-test-badge">
                  <strong>{pkg.testCount}</strong>
                  <span>Tests</span>
                </div>
              </div>
              
              <div className="adv-card-body">
                <p className="adv-tests-included">
                  <strong>Tests Included:</strong> {pkg.testsIncluded?.join(', ')} <a href="#" className="more-link">...more</a>
                </p>
                
                <div className="adv-card-actions">
                  <a href="#" className="know-more-link">+ Know more</a>
                </div>
                
                <div className="adv-card-icons">
                  <div className="adv-icon-item">
                    <IconHeartbeat size={16} className="icon-teal" />
                    <span>{pkg.fastingRequired}</span>
                  </div>
                  <div className="adv-icon-item">
                    <IconUserCheck size={16} className="icon-teal" />
                    <span>Recommended<br/>{pkg.recommendedFor}</span>
                  </div>
                  <div className="adv-icon-item">
                    <IconClockHour4 size={16} className="icon-teal" />
                    <span>{pkg.reportTime}</span>
                  </div>
                </div>
              </div>
              
              <div className="adv-card-footer">
                <div className="adv-price-box">
                  <div className="adv-price-row">
                    <div className="adv-current-price">₹{pkg.price}</div>
                    <div className="adv-original-price strike">₹{pkg.originalPrice}</div>
                  </div>
                  {pkg.discountText && (
                    <div className="discount-tag">
                      <IconDiscount2 size={14} /> {pkg.discountText}
                    </div>
                  )}
                </div>
                <button className="btn adv-book-btn" onClick={() => addToCart({ ...pkg, type: 'package' })}>Book Now &rarr;</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
