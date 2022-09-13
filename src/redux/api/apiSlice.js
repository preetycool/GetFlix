import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { MOVIE_API_KEY, MOVIE_BASE_URL } from "../../shared/constants";

export const movieApi = createApi({
  reducerPath: "movieApi",
  baseQuery: fetchBaseQuery({ baseUrl: MOVIE_BASE_URL }),
  endpoints: (builder) => ({
    getMovieBySearchTerm: builder.query({
      query: (searchTerm, pageNumber) =>
        `?apikey=${MOVIE_API_KEY}&s=${searchTerm}&page=${pageNumber}`,
    }),
    getMovieDetails: builder.query({
      query: (title) => `?apikey=${MOVIE_API_KEY}&t=${title}`,
    }),
  }),
});

export const { useGetMovieBySearchTermQuery, useGetMovieDetailsQuery } =
  movieApi;
