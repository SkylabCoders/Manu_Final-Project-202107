import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginButton from '../../pages/Login';
import LogoutButton from '../../pages/Logout';

import './Header.scss';

const Header = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo-box">
          <img
            className="header__logo-img"
            src="https://i.ibb.co/C5SH2XL/LOGO-CEBRATICA.png"
            alt="LOGO-CEBRATICA"
            border="0"
          />
          { isAuthenticated
            ? <LogoutButton />
            : <LoginButton />}
        </NavLink>
        { !isAuthenticated
          ? (
            <nav className="header__navegator">
              <ul className="header__nav-list">
                <li className="header__nav-item"><Link className="header__nav-link" to="/home">Home</Link></li>
              </ul>
            </nav>
          )
          : (
            <nav className="header__navegator">
              <ul className="header__nav-list">
                <li className="header__nav-item"><Link className="header__nav-link" to="/profile">Profile</Link></li>
                <li className="header__nav-item"><Link className="header__nav-link" to="/featuredmovies">Top Rated</Link></li>
                <li className="header__nav-item"><Link className="header__nav-link" to="/favoritemovies/:1">Favorite Movies</Link></li>
              </ul>
            </nav>

          )}

      </div>

    </header>
  );
};
export default Header;
