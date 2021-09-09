import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadMovies from '../../../redux/actions/actionCreatorTopMovies';
import NavButtons from '../../sections/navButtons';

import './TopMovies.scss';

const FeaturedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  const featuredMovies = useSelector((movie) => movie.topMovies);
  return (
    <>
      <div className="movies">
        <h1>Top Movies</h1>
        <div className="movies__grid">
          {featuredMovies.map((movie) => (
            <div className="movies__item">
              <img className="movies__img" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="Pouster" />
              <h3>{movie?.title}</h3>
              <p>{movie?.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
      <NavButtons />
    </>
  );
};
export default FeaturedMovies;
