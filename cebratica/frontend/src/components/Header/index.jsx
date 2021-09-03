import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <div className="header__logo-box">
      <Link to="/">
        <a href="https://imgbb.com/"><img src="https://i.ibb.co/C5SH2XL/LOGO-CEBRATICA.png" alt="LOGO-CEBRATICA" border="0" /></a>
      </Link>
    </div>
  </header>
);

export default Header;
