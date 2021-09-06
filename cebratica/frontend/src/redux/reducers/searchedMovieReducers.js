import actionTypes from '../actions/actionTypes';

const searchedMovieReducers = (filterMovie = [], action) => {
  let newFilterMovie = filterMovie;

  switch (action.type) {
    case actionTypes.LOAD_SEARCHED_MOVIES:
      newFilterMovie = action.movie.map((movie) => movie);
      break;

    default:
      break;
  }
  return newFilterMovie;
};
export default searchedMovieReducers;
