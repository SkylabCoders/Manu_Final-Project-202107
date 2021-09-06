import axios from 'axios';
import actionTypes from './actionTypes';

export default function loadSearchedArtists(inputValue) {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: 'GET',
      url: `${inputValue}`,
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatchEvent({
      type: actionTypes.LOAD_SEARSHED_MOVIES,
      movie: data.movie.items
    });
  };
}
