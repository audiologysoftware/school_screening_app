import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.settings-container')) {
        setIsSettingsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="navbar">
      <div className="container">
        {/* "Early Spark" on the left side */}
        <div className="logo">
          <h1>Early Spark</h1>
        </div>

        {/* Hamburger menu for mobile view */}
        <button className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </button>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          <li><Link to="/dashboard">Home</Link></li>
          
          {/* Settings Dropdown */}
          <li className="settings-container">
            <button className="settings-btn" onClick={toggleSettings}>Settings</button>
            {isSettingsOpen && (
              <ul className="settings-dropdown">
                <li><Link to="/change-password">Change Password</Link></li>
              </ul>
            )}
          </li>
          <li><Link to="/">Sign out</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
