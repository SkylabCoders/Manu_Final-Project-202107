import React from 'react';
import DeleteInFavoriteList from '../../sections/DeleteInFavoriteList/DeleteInFavoriteList';

const FavoriteMovies = () => {
  // eslint-disable-next-line max-len
  const localS = Object.entries(localStorage).map((element) => ({ element: JSON.parse(element[0]), film: JSON.parse(element[1]) }));
  return (
    <section>
      <h1>Your Favourite List</h1>
      <h2>Here you have all favorite movies</h2>
      {localS.map((e) => (
        <div>
          <div>
            <h2>{e.film.id.title}</h2>
            <h3>
              Date:
              <span>{e.film.id.release_date}</span>
            </h3>
            <p>
              Description:
              <span>{e.film.id.overview}</span>
            </p>
          </div>
          <div>
            <img src={`https://image.tmdb.org/t/p/w500${e.film.id?.poster_path}`} alt="" />
          </div>
          <DeleteInFavoriteList movie={e.film.id.original_title} />
        </div>
      ))}
    </section>
  );
};

export default FavoriteMovies;
