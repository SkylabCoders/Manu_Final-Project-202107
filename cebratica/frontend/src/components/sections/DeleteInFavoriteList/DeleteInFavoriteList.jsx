import React from 'react';

const removeMovieOfLocalStore = (movie) => {
  console.log(movie);
  localStorage.removeItem(JSON.stringify(movie.movie));
  return (
  // eslint-disable-next-line no-alert
    alert('Delete Item')
  );
};
const DeleteInFavoriteList = (movie) => (
  <>
    <button className="addButton" type="submit" onClick={() => removeMovieOfLocalStore(movie)}>click</button>
  </>
);
export default DeleteInFavoriteList;
