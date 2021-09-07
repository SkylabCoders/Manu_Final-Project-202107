import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import loadMovies from '../../../redux/actions/actionCreatorTopMovies';

const img = 'https://image.tmdb.org/t/p/';

const FeaturedMovies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovies());
  }, []);

  const featuredMovies = useSelector((state) => state.topMovies);
  return (
    <>
      <h1>Top Movies</h1>
      <div>
        {featuredMovies.map((movie) => (
          <div>
            <p>{movie.original_title}</p>
            <img src={img + movie.poster_path} alt="" />

          </div>

        ))}

      </div>
    </>
  );
};
export default FeaturedMovies;
