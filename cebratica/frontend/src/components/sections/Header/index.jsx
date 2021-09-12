import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import LoginButton from '../../pages/Login';
import LogoutButton from '../../pages/Logout';

import './Header.scss';

const Header = () => {
  const { isAuthenticated } = useAuth0();

  const elemento = document.getElementById('header');
  (window).scroll((e) => {
    if (e.scrollTop() > 0) {
      elemento.classList.add('cambioColor');
    } else {
      elemento.classList.remove('cambioColor');
    }
  });
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__right-container">
          <NavLink to="/" className="header__logo-box">
            <img
              className="header__logo-img"
              src="https://pngimg.com/uploads/zebra/zebra_PNG8958.png"
              alt="LOGO-CEBRATICA"
              border="0"
            />

          </NavLink>

        </div>
        <div className="header__left-container">
          { isAuthenticated
            ? <LogoutButton />
            : <LoginButton />}
          { isAuthenticated
            && (
              <nav className="header__navegator">
                <ul className="header__nav-list">
                  <li className="header__nav-item"><Link className="header__nav-link" to="/profile">Profile</Link></li>
                  <li className="header__nav-item"><Link className="header__nav-link" to="/favoritemovies/">Favorite Movies</Link></li>
                </ul>
              </nav>
            )}
        </div>

      </div>

    </header>
  );
};
export default Header;
