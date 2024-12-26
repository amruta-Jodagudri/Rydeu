import React, { useState } from 'react';
import './Navbar.css';
import { FaQuestionCircle, FaGlobe, FaUserCircle, FaBars } from 'react-icons/fa';
import Flag from 'react-world-flags';

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="help-header">
      <div className="logo">APJ</div>

      <div className="header-options">
        <div className="header-item">
          <FaGlobe className="icon" />
          <a href="#">Help</a>
        </div>
        <div className="header-item">
        <Flag code="MY" className="flag-icon" />
          <a href="#">Deutsch</a>
        </div>
        <span className="divider">|</span>
        <div className="header-item">
          <span>EUR</span>
        </div>

        <div className="header-item profile">
          <FaUserCircle className="profile-icon" onClick={toggleDropdown} />
          <FaBars className="dropdown-icon" onClick={toggleDropdown} />
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <a href="#">Profile</a>
              <a href="#">Settings</a>
              <a href="#">Logout</a>
            </div>
          )}
        </div>
      </div>

      <div className="mobile-dropdown">
      <p className="open-requests">Open Requests</p>

        <FaBars className="mobile-toggle-icon" onClick={toggleDropdown} />
        {isDropdownOpen && (
          <div className="mobile-menu">
            <div className="profile-section">
              <FaUserCircle className="profile-icon-large" />
              <span>Profile</span>
            </div>
            <div className="menu-items">
              <a href="#">Setting</a>
              <a href="#">Help</a>
              <a href="#"><Flag code="MY" className="flag-icon" />Deutsch | EUR</a>
              <a href="#">Logout</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

