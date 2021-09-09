import axios from 'axios';
import actionTypes from './actionTypes';

export default function movieDetails(id) {
  return async (dispatch) => {
    try {
      const { data } = await axios(`https://api.themoviedb.org/3/movie/${id.movieid}?api_key=c953b29ed723f6d4e60c4d192395bc92`);
      dispatch({
        type: actionTypes.LOAD_MOVIE_DETAILS,
        data: data.results
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };
}
