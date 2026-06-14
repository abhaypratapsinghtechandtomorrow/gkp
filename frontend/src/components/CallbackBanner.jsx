import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import './CallbackBanner.css';

const CallbackBanner = () => {
  const { user, setIsLoginOpen } = useCart();
  const [mobile, setMobile] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = () => {
    if (!mobile || mobile.length < 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }

    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
    const newRequest = {
      id: 'call_' + Date.now(),
      userId: user ? user.id : 'guest',
      name: user ? user.name : 'Guest',
      registeredMobile: user ? user.mobile : 'N/A',
      callbackMobile: mobile,
      date: timestamp
    };

    const existingRequests = JSON.parse(localStorage.getItem('callbacksDB') || '[]');
    existingRequests.push(newRequest);
    localStorage.setItem('callbacksDB', JSON.stringify(existingRequests));

    setSuccess(true);
    setMobile('');
    
    setTimeout(() => setSuccess(false), 3000);
  };

  return (
    <div className="callback-banner">
      <div className="container">
        <div className="callback-content">
          <span className="callback-title">
            {success ? "Request Received! We'll call you shortly." : "Get a Callback from our Health Advisor"}
          </span>
          <div className="callback-form">
            <input 
              type="tel" 
              placeholder="Enter your 10 digit mobile no."
              className="callback-input"
              maxLength="10"
              value={mobile}
              onChange={(e) => setMobile(e.target.value.replace(/\D/g, ''))}
            />
            <button className="callback-btn" onClick={handleSubmit}>
              Get a Call Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallbackBanner;
