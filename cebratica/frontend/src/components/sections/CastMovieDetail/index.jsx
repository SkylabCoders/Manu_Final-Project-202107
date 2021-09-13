/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import creditsMovie from '../../../redux/actions/actionCreatorCreditsDetail';

const CastMovieDetail = (movie) => {
  const dispatch = useDispatch();
  useEffect(() => (
    dispatch(creditsMovie(movie?.movie))
  ), []);

  const castDetail = useSelector((store) => store.creditsMovie);
  const director = castDetail?.crew?.find((item) => item.known_for_department === 'Directing');
  return (
    <div>
      <h2>Actors</h2>
      {castDetail.cast && (
      <div>
        <p>{castDetail?.cast[0].name}</p>
        <p>{castDetail?.cast[1].name}</p>
        <p>{castDetail?.cast[2].name}</p>
      </div>

      )}
      <div>
        <h2>Director</h2>
        {director?.name && (
          <p>{director?.name}</p>
        )}

      </div>
    </div>
  );
};

export default CastMovieDetail;
