import React from 'react';
import FeatureCard from '../components/FeatureCard';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import 'font-awesome/css/font-awesome.min.css';

const WhyChoose = () => {
  return (
    <div className="why-choose">
      <h2>Reasons to choose IreCooling Services</h2>
      <div className="features">
        <FeatureCard
          title="Experienced Technicians"
          description="Our team consists of skilled and trained professionals who understand all types of cooling systems."
          
        />
        <FeatureCard
          title="Reliable & Affordable"
          description="We offer high-quality services at competitive prices, ensuring value for your investment."
          
        />
        <FeatureCard
          title="24/7 Emergency Support"
          description="Cooling emergencies can happen anytime, and we’re here to help when you need us the most." 
        />
        <FeatureCard
        tag={<FontAwesomeIcon icon="fa-solid fa-check" />}
          title="Eco-Friendly Solutions"
          description="We prioritize energy-efficient and environmentally friendly cooling options." 
        />
      </div>
      
    </div>
  );
};

export default WhyChoose;
