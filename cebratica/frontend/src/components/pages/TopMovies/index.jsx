import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import loadMovies from '../../../redux/actions/actionCreatorTopMovies';
import NavButtons from '../../sections/navButtons';
import AddToFavourites from '../../sections/AddFavButtons';

import './TopMovies.scss';

const FeaturedMovies = () => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  const featuredMovies = useSelector((movie) => movie.topMovies);

  return (
    <div className="movies">
      <h2>Top movies</h2>
      <div className="movies__grid">
        {featuredMovies?.map((movie) => (
          <div className="movies__movie-container">
            <Link className="movies__item" to={`moviedetails/${movie?.id}`}>
              <img className="movies__img" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="Pouster" />
              <h3>{movie?.title}</h3>
              <p>{movie?.vote_average}</p>
            </Link>
            <div>
              { isAuthenticated
            && <AddToFavourites id={movie} /> }
            </div>
          </div>
        ))}
      </div>
      <NavButtons />
    </div>
  );
};
export default FeaturedMovies;
