import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import searchMovies from '../../../redux/actions/actionCreatorSearchedMovies';
import AddToFavourites from '../AddFavButtons';

import './Search.scss';
import '../../App.scss';

const SearchMovies = () => {
  const { isAuthenticated } = useAuth0();
  const [searchMovie, setSearchMovie] = useState('');

  const handleOnChange = (e) => { setSearchMovie(e.target.value); };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchMovies(searchMovie));
  }, [searchMovie]);

  const searchedMovies = useSelector((store) => store.searchMovies);

  return (
    <section className="section-search-movie">

      <h2 className="section-search-movie__h2-title">Search Movies</h2>
      <form onSubmit={handleSubmit} className="section-search-movie__search-form">
        <input
          className="search-form__input"
          type="search"
          name="searchMovie"
          id="searchMovie"
          placeholder="Search your favourite movie"
          value={searchMovie}
          onChange={handleOnChange}
        />
      </form>
      <div className="movies">

        { searchedMovies.length >= 1
           && <h2>Search Results</h2> }
        <div className="movies__grid">
          {searchedMovies?.map((movie) => (
            <div className="movies__movie-container">
              <Link className="movies__item" to={`moviedetails/${movie?.id}`}>
                <img className="movies__img" src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`} alt="Pouster" />
                <h3>{movie?.title}</h3>
                <p>{movie?.vote_average}</p>
              </Link>
              <div>
                { isAuthenticated
           && <AddToFavourites id={movie} /> }
              </div>
            </div>

          ))}
        </div>
      </div>
    </section>

  );
};
export default SearchMovies;
