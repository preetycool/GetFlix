/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable import/prefer-default-export */
import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./api/apiSlice";
import searchMovieSlice from "./slices/searchMovieSlice";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    movie: searchMovieSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      movieApi.middleware,
    ),
});
