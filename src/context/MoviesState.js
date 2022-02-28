import React, { useState } from "react";
import MoviesContext from "./moviesContext";

const MoviesState = (props) => {
  const host = "https://api.themoviedb.org/3/movie";

  const initialMovies = [];
  const initialCast = [];
  const initialRecommendations = [];
  const initialReview = [];
  const [cast, setCast] = useState(initialCast);
  const [movies, setMovies] = useState(initialMovies);
  const [recommendations, setRecommendations] = useState(
    initialRecommendations
  );
  const [review, setReview] = useState(initialReview);
  const [searchResults, setSearchResults] = useState(movies);

  // Fetch movies according to the users choice
  const getGenericMovies = async (options) => {
    const response = await fetch(
      `${host}/${options}?api_key=624fc02e98ece02d693a2c9ba09fa6f8&language=en-US`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const json = await response.json();
    setMovies(json);
    console.log(movies);
  };
  console.log(movies);

  // Get the details of a single movie
  const getMovieDetail = async (id) => {
    const response = await fetch(
      `${host}/${id}?api_key=624fc02e98ece02d693a2c9ba09fa6f8&language=en-US`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(response);

    const json = await response.json();
    setMovies(json);
    // console.log(movies);
  };
  // console.log(movies);

  // Get the details of all the cast in a single movie
  const getCastDetail = async (id) => {
    const response = await fetch(
      `${host}/${id}/credits?api_key=624fc02e98ece02d693a2c9ba09fa6f8&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(response);

    const json = await response.json();
    setCast(json);
  };

  // Get recommendations on a particular movie
  const getRecommendations = async (id) => {
    const response = await fetch(
      `${host}/${id}/recommendations?api_key=624fc02e98ece02d693a2c9ba09fa6f8&language=en-US`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(response);

    const json = await response.json();
    setRecommendations(json);
  };

  // Get review of a particular movie
  const getReview = async (id) => {
    const response = await fetch(
      `${host}/${id}/reviews?api_key=624fc02e98ece02d693a2c9ba09fa6f8&language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(response);

    const json = await response.json();
    setReview(json);
  };

  // Get all the TV shows
  const getTvShows = async (options) => {
    const response = await fetch(
      `${host}/${options}?api_key=624fc02e98ece02d693a2c9ba09fa6f8&language=en-US`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    // console.log(response);

    const json = await response.json();
    setMovies(json);
  };

  const getSearchResults = (searchString) => {
    const searchMovies = movies.hasOwnProperty("results")
      ? movies?.results?.filter((item) =>
          item?.title.toLowerCase().includes(searchString.toLowerCase())
        )
      : movies?.filter((item) =>
          item?.title.toLowerCase().includes(searchString.toLowerCase())
        );

    setSearchResults(searchMovies);
    // console.log(searchMovies);
  };

  return (
    <MoviesContext.Provider
      value={{
        movies,
        cast,
        recommendations,
        review,
        searchResults,
        getGenericMovies,
        getTvShows,
        getMovieDetail,
        getCastDetail,
        getRecommendations,
        getReview,
        getSearchResults,
      }}
    >
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesState;
