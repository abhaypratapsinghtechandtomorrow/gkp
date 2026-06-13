import React, { useState } from 'react';
import axios from 'axios';
import { useCart } from '../context/CartContext';
import { IconX } from '@tabler/icons-react';
import './LoginModal.css';

const LoginModal = () => {
  const { isLoginOpen, setIsLoginOpen, login } = useCart();
  const [isRegister, setIsRegister] = useState(false);
  
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  if (!isLoginOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const endpoint = isRegister ? '/api/auth/register' : '/api/auth/login';
      const response = await axios.post(`http://localhost:5000${endpoint}`, formData);
      
      // Call the context login function
      login(response.data.token, response.data.user);
      
      // Reset form
      setFormData({ name: '', email: '', password: '' });
      setIsRegister(false);
    } catch (err) {
      setError(err.response?.data?.message || 'Authentication failed. Make sure backend is connected to MongoDB.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={() => setIsLoginOpen(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={() => setIsLoginOpen(false)}>
          <IconX size={20} />
        </button>
        
        <h2 className="modal-title">{isRegister ? 'Create Account' : 'Welcome Back'}</h2>
        
        {error && <div className="modal-error">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          {isRegister && (
            <div className="form-group">
              <label>Full Name</label>
              <input 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
                placeholder="John Doe"
              />
            </div>
          )}
          
          <div className="form-group">
            <label>Email Address</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
              placeholder="you@example.com"
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              required 
              placeholder="••••••••"
            />
          </div>
          
          <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
            {loading ? 'Processing...' : (isRegister ? 'Sign Up' : 'Login')}
          </button>
        </form>
        
        <div className="modal-toggle">
          {isRegister ? (
            <p>Already have an account? <button onClick={() => setIsRegister(false)}>Login</button></p>
          ) : (
            <p>Don't have an account? <button onClick={() => setIsRegister(true)}>Sign Up</button></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
