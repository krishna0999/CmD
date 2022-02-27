import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import moviesContext from "../../context/moviesContext";
import "./MovieDetails.css";
import Recommended from "./Recommended";

function MovieDetails() {
  const context = useContext(moviesContext);
  const {
    movies,
    getMovieDetail,
    getCastDetail,
    cast,
    recommendations,
    getRecommendations,
  } = context;
  const { id } = useParams();
  useEffect(() => {
    getMovieDetail(id);
    getCastDetail(id);
    getRecommendations(id);
  }, []);

  const cast1 = cast?.cast?.map((item) => item.name).slice(0, 6);

  console.log(movies, cast1, recommendations);

  return (
    <div className="movieDetails">
      <div className="moviesDetails__container">
        {/* Movie image ---> */}
        <div className="movieDetails__image">
          <img
            src={`http://image.tmdb.org/t/p/w780${movies?.backdrop_path}`}
            alt="poster"
          />
        </div>

        {/* Movies details block on the right top side ---> */}
        <div className="movieDetails__details">
          <h1>{movies?.title}</h1>
          <h3>
            Tagline :{" "}
            <span>{movies.tagline ? movies.tagline : "Unknown..."}</span>
          </h3>

          {/* Movie casts ---> */}
          <h2>Cast : </h2>
          <div className="movieDetails__cast">
            {cast1?.map((item) => (
              <p>{item}, </p>
            ))}
          </div>

          {/* Movie genre or category --> */}
          <h2>Genres : </h2>
          <div className="movieDetails__genres">
            {movies?.genres?.map((genre) => (
              <p>{genre.name}</p>
            ))}
          </div>
        </div>

        {/* Movie overview block below the image section ---> */}
        <div className="movieDetails__overview">
          <p>{movies?.overview}</p>
        </div>

        {/* Movie extraas block on the right of overview ---> */}
        <div className="movieDetails__extraas">
          <h3>Produced by : </h3>
          <div className="movieDetails__producers">
            {movies?.production_companies?.map((item) => (
              <p>{item.name}</p>
            ))}
          </div>
          <h3 className="movieDetails__status">
            Status : <span>{movies?.status}</span>
          </h3>
          <h3 className="movieDetails__adult">
            Adult : <span>{movies.adult ? "Yes" : "No"}</span>
          </h3>
        </div>
      </div>

      <div className="movieDetails__recommended">
        <h1>Recommended for you </h1>
        {recommendations?.results?.map((item) => (
          <Recommended movie={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default MovieDetails;
