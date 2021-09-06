import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadMovieDetails(movie) {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: 'GET',
      url: `${movie}`,
      header: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: actionTypes.LOAD_MOVIE_DETAILS,
      movie: data.movie.items
    });
  };
}
