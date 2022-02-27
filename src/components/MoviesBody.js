import React, { useContext, useEffect } from "react";
import moviesContext from "../context/moviesContext";
import MovieTemplate from "./MovieTemplate";
import "./MovieBody.css";

function MoviesBody() {
  const context = useContext(moviesContext);
  const { movies } = context;

  useEffect(() => {
    // getPopularMovies();
  }, []);

  console.log(movies);
  return (
    <div className="movies">
      <div className="movies__container">
        {movies?.results?.map((movie) => (
          <MovieTemplate movie={movie} key={movie.id} />
        ))}
      </div>
    </div>
  );
}

export default MoviesBody;
