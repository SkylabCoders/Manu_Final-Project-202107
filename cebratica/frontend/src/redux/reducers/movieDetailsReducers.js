import actionTypes from '../actions/actionTypes';

const movieDetailsReducer = (movieDetails = [], action) => {
  let newMovieDetails = movieDetails;
  switch (action.type) {
    case actionTypes.LOAD_MOVIE_DETAILS:
      newMovieDetails = action.movie.map((movie) => movie);
      break;

    default:
      break;
  }
  return newMovieDetails;
};

export default movieDetailsReducer;