import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import movieDetail from '../../../redux/actions/actionCreatorMovieDetail';

import './MovieDetail.scss';

const MovDetail = () => {
  const movieId = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(movieDetail(movieId.id));
  }, [movieId.id]);

  const movieDetails = useSelector((store) => store.movieDetails);

  return (
    <section className="details-section">
      <div className="movie-detail">
        <h1 className="movie-detail__h1-title">Movie Details</h1>
        <div className="movie-detail__item-box item-box">
          <div className="item-box__item-description item-description">
            <h2 className="item-description__h2-title">{movieDetails.title}</h2>

            <p className="item-description__description">{movieDetails.overview}</p>
            <p className="item-description__rating-title">
              Rating:
              <span className="item-description__rating-number">{movieDetails.vote_average}</span>
            </p>
            <p className="item-description__language">{movieDetails.original_language}</p>
          </div>
          <div className="item-box__item-picture-box item-picture-box">
            <img className="item-picture-box__img" src={`https://image.tmdb.org/t/p/w500${movieDetails?.poster_path}`} alt="Pouster" />
          </div>
        </div>
      </div>
    </section>

  );
};
export default MovDetail;
