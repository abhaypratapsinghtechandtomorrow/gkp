import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconShoppingCart } from '@tabler/icons-react';
import { useCart } from '../context/CartContext';
import './Tests.css';

const Tests = () => {
  const [tests, setTests] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    const fetchTests = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/tests');
        setTests(response.data);
      } catch (error) {
        console.error('Error fetching tests:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchTests();
  }, []);

  return (
    <section id="tests" className="section tests">
      <div className="container">
        <div className="tests-header animate-fade-in-up">
          <h2 className="section-title" style={{ marginBottom: 0 }}>All Tests</h2>
          <button className="btn btn-outline">View All Tests</button>
        </div>

        {loading ? (
          <div className="loading">Loading tests...</div>
        ) : (
          <div className="tests-grid">
            {tests.map((test, index) => {
              const delayClass = `delay-${(index % 3 + 1) * 100}`;
              return (
                <div key={test.id} className={`test-card animate-fade-in-up ${delayClass}`}>
                  <div className="test-content">
                    <h3 className="test-title">{test.name}</h3>
                  <p className="test-desc">{test.description}</p>
                  <div className="test-price">₹{test.price}</div>
                </div>
                <div className="test-action">
                  <button className="btn btn-primary add-btn" onClick={() => addToCart({ ...test, type: 'test' })}>
                    <IconShoppingCart size={18} style={{ marginRight: '8px' }} />
                    Book Now
                  </button>
                </div>
              </div>
            )})}
          </div>
        )}
      </div>
    </section>
  );
};

export default Tests;
