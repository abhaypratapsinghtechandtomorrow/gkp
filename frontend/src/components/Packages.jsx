import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconClock, IconActivity, IconUser, IconPlus } from '@tabler/icons-react';
import { useCart } from '../context/CartContext';
import './Packages.css';

const categories = ['Full Body Checkup', 'Fever', 'STD', 'Vitamins', 'Diabetes', 'Heart', 'Thyroid', 'Kidney', 'Allergy'];

const Packages = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('Full Body Checkup');
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/packages');
        setPackages(response.data);
      } catch (error) {
        console.error('Error fetching packages:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackages();
  }, []);

  const filteredPackages = packages.filter(pkg => pkg.category === activeTab);

  return (
    <section id="packages" className="section packages">
      <div className="container">
        <h2 className="packages-main-title">Full Body Checkup in Gurgaon</h2>
        
        <div className="packages-tabs">
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

        {loading ? (
          <div className="loading">Loading packages...</div>
        ) : (
          <div className="advanced-packages-grid">
            {filteredPackages.map((pkg, index) => (
              <div key={pkg.id} className="advanced-card">
                <div className="adv-card-header">
                  <h3 className="adv-card-title">{pkg.name}</h3>
                  <div className="adv-test-badge">
                    <strong>{pkg.testCount}</strong>
                    <span>Tests</span>
                  </div>
                </div>
                
                <div className="adv-card-body">
                  <p className="adv-tests-included">
                    <strong>Tests Included:</strong> {pkg.testsIncluded?.slice(0, 4).join(', ')} ...<a href="#" className="more-link">more</a>
                  </p>
                  
                  <div className="adv-card-actions">
                    <a href="#" className="know-more-link"><IconPlus size={12}/> Know More</a>
                    <select className="members-select">
                      <option>1 Member</option>
                      <option selected>2 Members</option>
                    </select>
                  </div>
                  
                  <div className="add-more-banner">
                    + Add 1 more &rarr; Pay ₹{Math.round(pkg.price * 0.9)}/person!
                  </div>
                  
                  <div className="adv-card-icons">
                    <div className="adv-icon-item">
                      <IconActivity size={14} className="icon-teal" />
                      <span>{pkg.fastingRequired}</span>
                    </div>
                    <div className="adv-icon-item">
                      <IconUser size={14} className="icon-teal" />
                      <span>{pkg.recommendedFor}</span>
                    </div>
                    <div className="adv-icon-item">
                      <IconClock size={14} className="icon-teal" />
                      <span>{pkg.reportTime}</span>
                    </div>
                  </div>
                </div>
                
                <div className="adv-card-footer">
                  <div className="adv-price-box">
                    <div className="adv-current-price">₹{pkg.price} <span className="per-person">per person</span></div>
                    <div className="adv-original-price">
                      <span>₹{pkg.price * 2}</span> <span className="strike">₹{pkg.originalPrice}</span>
                    </div>
                    {pkg.discountText && <div className="discount-tag">{pkg.discountText}</div>}
                  </div>
                  <button className="btn adv-book-btn" onClick={() => addToCart({ ...pkg, type: 'package' })}>Book Now &rarr;</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Packages;
