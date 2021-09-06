import axios from 'axios';
import actionTypes from './actionTypes';

const clientId = '';

export default async function getMoviesToken() {
  try {
    const { data } = await axios({
      method: 'POST',
      url: '',
      headers: {
        'Content-Type': '',
        Authorization: `Basic ${clientId}`
      },
      data: ''
    });
    localStorage.setItem('token', JSON.stringify(data.access_token));
    return data.access_token;
  } catch (error) {
    return null;
  }
}

export function loadAxiosTopMovies(RandomInputValue) {
  return async (dispatch) => {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: 'GET',
      url: `${RandomInputValue}`,
      headers: { Authorization: `Bearer ${token}` }
    });
    dispatch({
      type: actionTypes.LOAD_TOP_MOVIES,
      topMovies: data.movie.items
    });
  };
}
