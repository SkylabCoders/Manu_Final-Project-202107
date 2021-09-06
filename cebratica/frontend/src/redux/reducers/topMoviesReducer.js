import actionTypes from '../actions/actionTypes';

const topMoviesReducer = (topMovies = [], action) => {
  let newTopMovies = topMovies;
  switch (action.type) {
    case actionTypes.LOAD_TOP_MOVIES:
      newTopMovies = action.newTopMovies?.map((movie) => movie);
      break;
    default:
      break;
  }
  return newTopMovies;
};

export default topMoviesReducer;
