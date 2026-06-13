import React from 'react';
import './CallbackBanner.css';

const CallbackBanner = () => {
  return (
    <div className="callback-banner">
      <div className="container">
        <div className="callback-content">
          <span className="callback-title">Get a Callback from our Health Advisor</span>
          <div className="callback-form">
            <input 
              type="text" 
              placeholder="Enter your 10 digit mobile no." 
              className="callback-input"
              maxLength="10"
            />
            <button className="callback-btn">Get a Call Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackBanner;
