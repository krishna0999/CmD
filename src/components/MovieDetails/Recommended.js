import React from "react";
import "./MovieDetails.css";

function Recommended({ movie }) {
  const handleRecommendation = (e) => {
    console.log(e.target.id);
  };

  //   console.log(movie?.className);

  return (
    <div className="recommended">
      <div
        className="recommended__container"
        id={movie.id}
        onClick={handleRecommendation}
      >
        <div className="recommended__containerImage">
          <img
            src={`http://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="recommended__containerDetails">
          <div className="title">{movie?.title}</div>
          <div className="overview">{movie?.overview}</div>
          <div className="release_date">
            Release Date : {movie?.release_date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
