import React from 'react';

import './AddFavButtons.scss';

const setStoreMovie = (movie) => {
  try {
    localStorage.setItem(JSON.stringify(movie?.id.original_title), JSON.stringify(movie));
    // eslint-disable-next-line no-alert
    alert('Elemento Guardado');
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Elemento ya esta eliminado');
  }
};
const addFavButton = (movies) => {
  setStoreMovie(movies);

  return (
    <p>Hola mundo cruel</p>
  );
};
const removeStoreMovie = (movie) => {
  localStorage.removeItem(JSON.stringify(movie?.id.original_title));
  return (
    // eslint-disable-next-line no-alert
    alert('Delete Item')
  );
};
const removeFavButton = (movies) => {
  removeStoreMovie(movies);

  return (
    <p>Hola mundo cruel</p>
  );
};

const AddToFavourites = (movies) => (
  <>
    <button className="addButton" type="submit" onClick={() => removeFavButton(movies)}>-</button>
    <button className="addButton" type="submit" onClick={() => addFavButton(movies)}>+</button>
  </>
);
export default AddToFavourites;
