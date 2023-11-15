import React from 'react';

const Footer = ({ isDarkMode, toggleDarkMode }) => {
  return (
    <footer>
        <small>Coded by Rishabh Raturi</small>

        {/* Toggle switch for dark mode */}
        <label className="switch">
            <input type="checkbox" checked={isDarkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
        </label>
    </footer>
  );
};

export default Footer;