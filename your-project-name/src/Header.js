
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img src={`${process.env.PUBLIC_URL}/Logo.jpg`} alt="Background" className="header-background"  />
      <h1 className="header-name">Juan Medina</h1>
    </div>
  );
};

export default Header;
