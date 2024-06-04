import React from 'react';

const Sidebar = ({ favoriteFilms, watchLaterFilms }) => {
  return (
    <div className="sidebar">
      <h2>Любимые фильмы</h2>
      <ul>
        {favoriteFilms.map((film) => (
          <li key={film.id}>{film.name}</li>
        ))}
      </ul>

      <h2>Фильмы к просмотру</h2>
      <ul>
        {watchLaterFilms.map((film) => (
          <li key={film.id}>{film.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;