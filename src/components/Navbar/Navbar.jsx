import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ toggleAssistant }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">Stay Finder</Link>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        <div />
        <div />
        <div />
      </div>
      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <Link to="/become-a-host" className="nav-link" onClick={() => setMenuOpen(false)}>Become a Host</Link>
        <Link to="/login" className="nav-link" onClick={() => setMenuOpen(false)}>Login</Link>
        <Link to="/signup" className="nav-button" onClick={() => setMenuOpen(false)}>Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar; 