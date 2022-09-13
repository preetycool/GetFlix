/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchQuery: "",
  selectedTitle: "",
  listOfMovieTitlesBasedOffSearch: [],
  searchPageNumber: 1,
};

const searchMovieSlice = createSlice({
  name: "searchMovie",
  initialState,
  reducers: {
    selectMovie(state, action) {
      state.selectedTitle = action.payload;
    },
    queryMovieTitle(state, action) {
      state.searchQuery = action.payload;
    },
    setlistOfMovieTitlesBasedOffSearch(state, action) {
      state.listOfMovieTitlesBasedOffSearch = [...action.payload];
    },
    incrementPageNumber(state) {
      state.searchPageNumber++;
    },
  },
});

export const {
  resetSelectedMovie,
  selectMovie,
  queryMovieTitle,
  setlistOfMovieTitlesBasedOffSearch,
  incrementPageNumber,
  startLoader,
  stopLoader,
} = searchMovieSlice.actions;
export default searchMovieSlice.reducer;
