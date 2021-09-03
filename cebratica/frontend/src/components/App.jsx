import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home/index';
import FavoriteMovies from './pages/FavoriteMovies';
import Login from './pages/Login';
import MovieDetails from './pages/MovieDetails';
import Pages404 from './pages/NotFound';
import Profile from './pages/Profile';
import Register from './pages/Register';
import Protected from './Routes/Protected';
import Public from './Routes/Public';
import Header from './Header';

import './App.scss';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Protected path="/" exact component={Home} />
      <Protected path="/favoritemovies/:id" component={FavoriteMovies} />
      <Protected path="/moviedetails/:id" component={MovieDetails} />
      <Protected path="/profile/:id" component={Profile} />

      <Public path="/login" exact component={Login} />
      <Public path="/register" exact component={Register} />

      <Route component={Pages404} />
    </Switch>
  </Router>
);

export default App;
