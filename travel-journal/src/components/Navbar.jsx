import React from 'react';

const Navbar = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <nav>
      <img src="../../public/navbar-globe.png" alt="travel journal logo" />
      <h4 className="nav-header">my travel journal.</h4>

      {/* Toggle switch for dark mode */}
      <label className="switch">
        <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
    </nav>
  );
};

export default Navbar;
