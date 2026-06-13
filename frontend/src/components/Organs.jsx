import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { IconHeartbeat, IconBone, IconActivity, IconStethoscope } from '@tabler/icons-react';
import './Organs.css';

const organIcons = {
  'heart': <IconHeartbeat size={32} color="#F16948" />,
  'bone': <IconBone size={32} color="#00A0A8" />,
  'sugar': <IconActivity size={32} color="#993556" />,
  'liver': <IconStethoscope size={32} color="#BA7517" />,
  'kidneys': <IconStethoscope size={32} color="#3B6D11" />,
  'thyroid': <IconStethoscope size={32} color="#185FA5" />
};

const Organs = () => {
  const [organs, setOrgans] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrgans = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/organs');
        setOrgans(response.data);
      } catch (error) {
        console.error('Error fetching organs:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchOrgans();
  }, []);

  return (
    <section id="organs" className="section organs">
      <div className="container">
        <h2 className="section-title animate-fade-in-up" style={{ textAlign: 'left', marginBottom: '32px' }}>
          Book Test by Organs
        </h2>
        
        {loading ? (
          <div className="loading">Loading organs...</div>
        ) : (
          <div className="organs-grid">
            {organs.map((organ, index) => (
              <div key={organ.id} className={`organ-card animate-fade-in-up delay-${(index % 6 + 1) * 100}`}>
                <div className="organ-icon-circle">
                  {organIcons[organ.icon] || <IconStethoscope size={32} />}
                </div>
                <h4 className="organ-name">{organ.name}</h4>
                <p className="organ-tests">{organ.tests}+ Tests</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Organs;
