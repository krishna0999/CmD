import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./MovieDetails.css";

function Recommended({ movie, id }) {
  let location = useNavigate();

  const handleRecommendation = (e) => {
    let movie_id = e.target.id;
    console.log(movie_id);
    location(`/${movie_id}`);
  };

  // console.log(id);

  return (
    <div className="recommended">
      <div className="recommended__container">
        <div
          className="recommended__containerImage"
          id={id}
          onClick={handleRecommendation}
        >
          <img
            id={id}
            onClick={handleRecommendation}
            src={`http://image.tmdb.org/t/p/w300${movie?.poster_path}`}
            alt="poster"
          />
        </div>
        <div className="recommended__containerDetails">
          <div className="title" id={id} onClick={handleRecommendation}>
            {movie?.title}
          </div>
          <div className="overview" id={id} onClick={handleRecommendation}>
            {movie?.overview}
          </div>
          <div className="release_date" id={id} onClick={handleRecommendation}>
            Release Date : {movie?.release_date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recommended;
