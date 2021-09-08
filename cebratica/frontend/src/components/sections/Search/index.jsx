import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import searchMovies from '../../../redux/actions/actionCreatorSearchedMovies';
import './Search.scss';

const SearchMovies = () => {
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
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          name="searchMovie"
          id="searchMovie"
          placeholder="Search your favourite movie"
          value={searchMovie}
          onChange={handleOnChange}
        />
      </form>
      <div className="movies">
        <div className="movies__grid">
          {searchedMovies?.map((movie) => (
            <div className="movies__item">

              <img className="movies__img" src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="Pouster" />
              <h3>{movie?.title}</h3>
              <p>{movie?.vote_average}</p>
            </div>
          ))}
        </div>
      </div>
    </>

  );
};
export default SearchMovies;
