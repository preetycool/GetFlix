import React from "react";
import "./MovieTile.scss";

const MovieTile = ({ title, year, imageUrl = "" }) => (
  <div className="movie-tile">
    {imageUrl && (
      <img className="movie-tile__image" src={imageUrl} alt={`${title}`} />
    )}
    {title && <p className="movie-tile__text">{title}</p>}
    {year && <p className="movie-tile__text">{year}</p>}
  </div>
);

export default MovieTile;
