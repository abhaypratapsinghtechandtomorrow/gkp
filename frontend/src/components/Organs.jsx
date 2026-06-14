import React, { useState } from 'react';
import { IconHeartbeat, IconBone, IconActivity, IconStethoscope, IconRipple, IconLungs, IconDropCircle } from '@tabler/icons-react';
import { organs as mockOrgans } from '../data/mockData';
import './Organs.css';

const organIcons = {
  'heart': <IconHeartbeat size={32} color="#F16948" />,
  'bone': <IconBone size={32} color="#00A0A8" />,
  'sugar': <IconActivity size={32} color="#993556" />,
  'liver': <IconStethoscope size={32} color="#BA7517" />,
  'kidneys': <IconStethoscope size={32} color="#3B6D11" />,
  'thyroid': <IconStethoscope size={32} color="#185FA5" />,
  'blood': <IconDropCircle size={32} color="#D32F2F" />,
  'lungs': <IconLungs size={32} color="#4CAF50" />,
  'general': <IconRipple size={32} color="#5C6BC0" />
};

const Organs = () => {
  const [organs] = useState(mockOrgans);

  return (
    <section id="organs" className="section organs">
      <div className="container">
        <h2 className="section-title animate-fade-in-up" style={{ textAlign: 'left', marginBottom: '32px' }}>
          Book Test by Organs
        </h2>
        
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
      </div>
    </section>
  );
};

export default Organs;
