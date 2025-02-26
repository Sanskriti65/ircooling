import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h1>Contact Us</h1>
        <ul className="footer-list">
          <li>shuklasanskrit70@gmail.com</li>
          <li>2nd Floor, Sector 3, Faridabad, Haryana 121007, India</li>
          <li>+91 xxxxxx2020</li>

          <li className="border-list"></li>
          <li className="socials">
            <a href="https://www.linkedin.com/in/0/" id="linkedin" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a href="https://github.com" id="github" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-github"></i>
            </a>
            <a href="https://x.com" id="twitter" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
            <a href="https://www.instagram.com" id="instagram" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>

      <div className="footer-section">
        <h1>Quick Links</h1>
        <ul className="footer-list">
          <li><Link to="/">Home</Link></li>
          <li>Terms & Conditions</li>
          <li>Return Policy</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
          <li><Link to="contact">Contact Us </Link></li>
          
        </ul>
      </div>
      <div className="footer-section">
        <ul className="footer-list">
        <p>&copy; 2023 IreCooling. All rights reserved.</p>
          <li className="sub">
            <input type="email" placeholder="Enter your email here" />
            <button className="btn">Subscribe</button>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;

 