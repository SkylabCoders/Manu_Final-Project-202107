import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Protected = ({ component: Component, ...rest }) => {
  const userLogged = true;

  if (!userLogged) {
    return <Redirect to="/login" />;
  }
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Route {...rest} component={Component} />;
};

export default Protected;
