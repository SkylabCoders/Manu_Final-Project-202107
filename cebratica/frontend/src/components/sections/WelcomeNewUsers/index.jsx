import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../pages/Login';
import LogoutButton from '../../pages/Logout';

import './WelcomeNewUsers.scss';

const WelcomeNewUsers = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <section className="banner-welcome">
      <div className="banner-welcome__container">
        <NavLink to="/" className="banner-welcome__logo">
          <img
            className="banner-welcome__logo-img"
            src="https://i.ibb.co/C5SH2XL/LOGO-CEBRATICA.png"
            alt="LOGO-CEBRATICA"
            border="0"
          />

        </NavLink>
        <p className="banner-welcome__subtitle">Its a simply web, create your list of favourite Movies and preserve.</p>
        <p className="banner-welcome__login-text">Login if would you like add movies to your favourites list</p>
        <p className="banner-welcome__login-button">
          { isAuthenticated
            ? <LogoutButton />
            : <LoginButton />}

        </p>
      </div>
    </section>
  );
};
export default WelcomeNewUsers;
