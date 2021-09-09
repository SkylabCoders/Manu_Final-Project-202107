import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import movieDetail from '../../../redux/actions/actionCreatorMovieDetail';

import '../TopMovies/TopMovies.scss';

const MovDetail = () => {
  const movieId = useParams();

  console.log(movieId.id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieDetail(movieId.id));
  }, [movieId.id]);

  const movieDetails = useSelector((store) => store.movieDetails);
  console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAA', movieDetails);
  return (
    <div>
      <h1>Movie Details</h1>
      <div>
        <div>
          <h2>{movieDetails.title}</h2>
          <p>Hola</p>
        </div>
        <div>
          <img className="movies__img" src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt="Pouster" />
        </div>
      </div>
    </div>
  );
};
export default MovDetail;
