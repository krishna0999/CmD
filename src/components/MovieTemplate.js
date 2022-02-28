import React, { useContext } from "react";
import "./MovieTemplate.css";
import { useNavigate } from "react-router-dom";

function MovieTemplate({ movie }) {
  let location = useNavigate();

  const handleDetails = (e) => {
    let movie_id = e.target.id;
    console.log(movie_id);
    location(`/${movie_id}`);
  };
  // vote_average
  return (
    <div className="movie">
      <figure className="movie__thumb">
        <img
          src={`http://image.tmdb.org/t/p/w300${movie?.poster_path}`}
          alt="poster"
        />
        <figcaption className="movie__caption">
          <h2 className="movie__title" key={movie?.id}>
            {movie?.original_title}
          </h2>
          <h4 className="movie__date">{movie?.release_date}</h4>
          <p className="movie__snippet">{movie?.overview}</p>
          <div className="buttons">
            <button
              id={movie.id}
              className="movie__button"
              onClick={handleDetails}
            >
              Read more
            </button>
          </div>
        </figcaption>
        <div className="movie__rating">
          <p>{movie?.vote_average}</p>
        </div>
      </figure>
    </div>
  );
}

export default MovieTemplate;
