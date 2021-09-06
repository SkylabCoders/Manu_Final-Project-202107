import actionTypes from './actionTypes';

export function loadFavMovies(favMovies) {
  return ({
    type: actionTypes.LOAD_FAVOURITE_MOVIES,
    favMovies
  });
}

export function deleteFavMovies(movies) {
  return ({
    type: actionTypes.DELETE_FAVOURITE_MOVIES,
    movies
  });
}

export function addFavMovies(movies) {
  return ({
    type: actionTypes.ADD_FAVOURITE_MOVIES,
    movies
  });
}
