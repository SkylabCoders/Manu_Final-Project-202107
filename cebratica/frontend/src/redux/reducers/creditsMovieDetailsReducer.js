import actionTypes from '../actions/actionTypes';

const creditsMovieReducer = (creditsMovieDetails = [], action) => {
  let newCreditsMovieDetails = creditsMovieDetails;
  switch (action.type) {
    case actionTypes.LOAD_CREDITS_DETAILS:
      newCreditsMovieDetails = action.data;
      break;

    default:
      break;
  }
  return newCreditsMovieDetails;
};

export default creditsMovieReducer;
