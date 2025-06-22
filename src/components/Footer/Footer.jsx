import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = ({ isAssistantOpen }) => {
  return (
    <footer className="main-footer">
      <div className="footer-brand">
        <h2>Stay Finder</h2>
        <p>&copy; {new Date().getFullYear()} Stay Finder. All rights reserved.</p>
      </div>
      <div className={`footer-links-container ${isAssistantOpen ? 'chatbot-open' : ''}`}>
        <div className="footer-section">
          <h3>Support</h3>
          <ul>
            <li><Link to="/help">Help Center</Link></li>
            <li><Link to="/safety">Safety information</Link></li>
            <li><Link to="/cancellation">Cancellation options</Link></li>
            <li><Link to="/report-concern">Report a concern</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>About</h3>
          <ul>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/investors">Investors</Link></li>
            <li><Link to="/terms">Terms</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hosting</h3>
          <ul>
            <li><Link to="/become-a-host">Become a Host</Link></li>
            <li><Link to="/community-program">Community program</Link></li>
            <li><Link to="/host-resources">Host resources</Link></li>
            <li><Link to="/hosting-responsibly">Hosting responsibly</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 