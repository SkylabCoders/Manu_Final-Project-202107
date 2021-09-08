import React from 'react';
import NavButtons from '../../sections/navButtons';
import SearchMovies from '../../sections/Search';
import FeaturedMovies from '../TopMovies';

const Home = () => (
  <>
    <SearchMovies />
    <FeaturedMovies />
    <NavButtons />
  </>
);

export default Home;
