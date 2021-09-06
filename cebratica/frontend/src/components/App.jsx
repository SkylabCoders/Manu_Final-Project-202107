import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './sections/Header/index';

import './App.scss';

const App = () => (
  <Router>
    <Header />
  </Router>
);

export default App;
