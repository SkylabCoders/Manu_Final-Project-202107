import { combineReducers } from 'redux';
import topMoviesReducer from './topMoviesReducer';
import favouriteMoviesreducer from './favouriteMoviesreducer';
import searchMovieReducers from './searchedMovieReducers';
import movieDetailsReducer from './movieDetailsReducers';

export default combineReducers({
  topMovies: topMoviesReducer,
  favouriteMovies: favouriteMoviesreducer,
  searchMovies: searchMovieReducers,
  movieDetails: movieDetailsReducer
});
