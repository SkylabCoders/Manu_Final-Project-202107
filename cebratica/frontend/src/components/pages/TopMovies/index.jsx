import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadMovies from '../../../redux/actions/actionCreatorTopMovies';

import './TopMovies.scss';

const img = 'https://image.tmdb.org/t/p/';

const FeaturedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  const featuredMovies = useSelector((state) => state.topMovies);
  return (
    <div className="movies">
      <h1>Top Movies</h1>
      <div className="movies__grid">
        {featuredMovies.map((movie) => (
          <div className="movies__item">
            <p>{movie.original_title}</p>
            <img src={img + movie.poster_path} alt="Pouster" />

          </div>
        ))}
      </div>
    </div>
  );
};
export default FeaturedMovies;
