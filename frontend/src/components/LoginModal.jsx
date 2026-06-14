import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { IconX } from '@tabler/icons-react';
import './LoginModal.css';

const LoginModal = () => {
  const { isLoginOpen, setIsLoginOpen, login } = useCart();
  const [isRegister, setIsRegister] = useState(false);

  const [formData, setFormData] = useState({ name: '', mobile: '', password: '' });
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
      // Retrieve local database
      const existingUsers = JSON.parse(localStorage.getItem('usersDB') || '[]');

      if (isRegister) {
        // Registration Logic
        if (existingUsers.find(u => u.mobile === formData.mobile)) {
          throw new Error('Mobile number already registered.');
        }

        const newUser = {
          id: 'user_' + Date.now(),
          name: formData.name,
          mobile: formData.mobile,
          password: formData.password // Simple local storage plain text
        };

        existingUsers.push(newUser);
        localStorage.setItem('usersDB', JSON.stringify(existingUsers));

        login('local-token-' + newUser.id, newUser);
      } else {
        // Login Logic
        // Special Admin Login
        if (formData.mobile === '8874141046' && formData.password === '1234') {
          const adminUser = {
            id: 'admin_1',
            name: 'Administrator',
            mobile: '8874141046',
            isAdmin: true
          };
          login('admin-token-123', adminUser);
        } else {
          const user = existingUsers.find(u => u.mobile === formData.mobile && u.password === formData.password);
          if (!user) {
            throw new Error('Invalid mobile number or password.');
          }
          login('local-token-' + user.id, user);
        }
      }

      // Reset form
      setFormData({ name: '', mobile: '', password: '' });
      setIsRegister(false);
    } catch (err) {
      setError(err.message || 'Authentication failed.');
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
                placeholder="Enter Your Name"
              />
            </div>
          )}

          <div className="form-group">
            <label>Mobile Number</label>
            <input
              type="tel"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
              placeholder="Enter Your Mobile Number"
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
