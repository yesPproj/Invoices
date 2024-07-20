import React, { useState } from 'react';
import './Navbar.css'; // Import the CSS file for the Navbar styles
import logo from './logo.png'; // Import the logo image

const Navbar = ({ setActivePage }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <img src={logo} alt="YesP Logo" className="logo" />
      <div className="menu-icon" onClick={handleMobileMenuToggle}>
        &#9776;
      </div>
      <ul className={`nav-links ${isMobileMenuOpen ? 'show' : ''}`}>
        <li className="nav-item" onClick={() => setActivePage('home')}>
          Home
        </li>
        <li className="nav-item" onClick={() => setActivePage('beta')}>
          Beta
        </li>
        <li className="nav-item" onClick={() => setActivePage('features')}>
          Features
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
