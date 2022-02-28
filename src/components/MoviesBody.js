import React, { useContext, useEffect } from "react";
import moviesContext from "../context/moviesContext";
import MovieTemplate from "./MovieTemplate";
import "./MovieBody.css";

function MoviesBody() {
  const context = useContext(moviesContext);
  const { movies, searchResults, getGenericMovies } = context;

  useEffect(() => {
    const receive = async () => {
      await getGenericMovies("popular");
    };

    receive();
  }, []);

  console.log(movies?.results);
  return (
    <div className="movies">
      <div className="movies__container">
        {(searchResults.length >= 1 ? searchResults : movies)?.hasOwnProperty(
          "results"
        ) // Checking whether there is need to do '.results or not'
          ? (searchResults.length >= 1 ? searchResults : movies)?.results?.map(
              (movie) => <MovieTemplate movie={movie} key={movie.id} />
            )
          : (searchResults.length >= 1 ? searchResults : movies)?.map(
              (movie) => <MovieTemplate movie={movie} key={movie.id} />
            )}
      </div>
    </div>
  );
}

export default MoviesBody;
