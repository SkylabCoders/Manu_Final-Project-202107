import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => (
  <header className="header">
    <div className="header__container">
      <NavLink to="/" className="header__logo-box">
        <img
          className="header__logo-img"
          src="https://i.ibb.co/C5SH2XL/LOGO-CEBRATICA.png"
          alt="LOGO-CEBRATICA"
          border="0"
        />
      </NavLink>
      <nav className="header__navegator">
        <ul className="header__nav-list">
          <li className="header__nav-item"><NavLink className="header__nav-link" to="/login">Login</NavLink></li>
          <li className="header__nav-item"><NavLink className="header__nav-link" to="/register">Register</NavLink></li>
          <li className="header__nav-item"><NavLink className="header__nav-link" to="/profile/:1">Profile</NavLink></li>
          <li className="header__nav-item"><NavLink className="header__nav-link" to="/favoritemovies/:1">Favorites</NavLink></li>
        </ul>
      </nav>

    </div>

  </header>
);
export default Header;
