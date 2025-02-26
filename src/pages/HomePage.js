import React from 'react';

const HomePage = () => {
  return (
    <div className="homepage">
    <div className="hero">
      <div className="hero-text">
        <h1 className="text-animate">
        "Stay Cool, Stay Comfortable – Reliable Solutions, Anytime!"
        </h1>
        <blockquote>– Your Partner in Comfort</blockquote>
        <button aria-label="Learn more about our services">Know more</button>
      </div>
      </div>
      <div className="testimonials">
      <div className="review-content">
        <h2>What Our Clients Say</h2>
        <div className="review-grid">
        <div className="review-card">
            <p>"Highly recommend! First Call responded quickly to my call. The service tech, Scott, 
            was courteous, friendly and VERY helpful. "</p>
            <span>- TechCorp CEO</span>
          </div>
        <div className="review-card">
            <p>"Highly recommend! First Call responded quickly to my call. The service tech, Scott, 
            was courteous, friendly and VERY helpful. "</p>
            <span>- TechCorp CEO</span>
          </div>
        <div className="review-card">
            <p>"Highly recommend! First Call responded quickly to my call. The service tech, Scott, 
            was courteous, friendly and VERY helpful. "</p>
            <span>- TechCorp CEO</span>
          </div>
        </div>
          </div>
      </div>
    </div>
    
  );
};

export default HomePage; 