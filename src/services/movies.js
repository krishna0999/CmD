// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const baseUrl = "https://api.themoviedb.org/3/movie";

// const createRequest = (url) => ({ url });

// export const moviesAPi = createApi({
//   reducerPath: "moviesApi",
//   baseQuery: fetchBaseQuery({ baseUrl }),
//   endpoints: (builder) => ({
//     getPopularMovies: builder.query({
//       query: () =>
//         createRequest(`/popular?api_key=${apiKey}&language=en-US&page=1`),
//     }),
//     getTopRatedMovies: builder.query({
//       query: (genre) =>
//         createRequest(`/${genre}?api_key=${apiKey}&language=en-US&page=1`),
//     }),
//     getSingleMovie: builder.query({
//       query: (movie_id) =>
//         createRequest(`/${movie_id}?api_key=${apiKey}&language=en-US&page=1`),
//     }),
//   }),
// });

// export const {
//   useGetPopularMoviesQuery,
//   useGetTopRatedMoviesQuery,
//   useGetSingleMovieQuery,
// } = moviesAPi;
