import React from 'react';
import NavButtons from '../../sections/navButtons';
import SearchMovies from '../../sections/Search';
import FeaturedMovies from '../TopMovies';
import WelcomeNewUsers from '../../sections/WelcomeNewUsers';
import Footer from '../../sections/Footer';

const Home = () => (
  <>
    <WelcomeNewUsers />
    <SearchMovies />
    <FeaturedMovies />
    <NavButtons />
    <Footer />
  </>
);

export default Home;
