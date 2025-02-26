import React from 'react';

const FeatureCard = ({ title, description, tag }) => {
  return (
    <div className="feature-card">
      <div className="tag">{tag}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard; 