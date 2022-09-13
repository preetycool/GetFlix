/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";
import "./SearchMovie.scss";
import { createAction } from "@reduxjs/toolkit";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import MovieTile from "../../components/MovieTile/MovieTile";
import { movieApi } from "../../redux/api/apiSlice";
import {
  queryMovieTitle,
  selectMovie,
  setlistOfMovieTitlesBasedOffSearch,
} from "../../redux/slices/searchMovieSlice";
import InputField from "../../components/InputField/InputField";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import { getRandomStringValueFromArray } from "../../shared/utils/utils";
import { LOADER_TEXT_SAMPLES } from "../../shared/constants";

const SearchMovie = () => {
  const { searchQuery, listOfMovieTitlesBasedOffSearch, isLoading } =
    useSelector((state) => state.movie);
  const queryMovie = createAction(queryMovieTitle);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState(searchQuery || "");
  const [movies, setMovies] = useState([...listOfMovieTitlesBasedOffSearch]);
  const [errorMessage, setErrorMessage] = useState("");
  const [getMovieBySearchTerm, { isFetching, isError }] =
    movieApi.endpoints.getMovieBySearchTerm.useLazyQuery();

  const handleInputChange = (e) => {
    setErrorMessage("");
    setMovies([]);
    dispatch(queryMovie(e.target.value));
    setSearchTerm(e.target.value);
  };

  const getMovieData = async () => {
    const movieData = await getMovieBySearchTerm(searchTerm);
    if (movieData?.data.Error) {
      setErrorMessage(movieData?.data.Error);
    } else {
      setMovies([...movieData.data.Search]);
    }
  };

  const handleClick = async () => {
    if (!searchTerm) {
      setErrorMessage("Please enter a movie title");
      return;
    }
    getMovieData();
  };

  const onMovieTileClick = (title) => () => {
    dispatch(selectMovie(title));
    dispatch(setlistOfMovieTitlesBasedOffSearch([...movies]));
    navigate("/movie");
  };

  const onEnterKeyDown = (fn) => (e) => {
    if (e.key === "Enter") {
      fn();
    }
  };

  if (isError) {
    return (
      <ErrorMessage
        errorMessage="We have ran into an error"
        onClick={() => getMovieData()}
      />
    );
  }

  return (
    <div className="container search-movie-container">
      <div
        className={`search-movie__introduction ${
          movies?.length > 0 ? "list" : "no-list"
        }`}
      >
        <h1 className="search-movie__heading">Welcome to GetFlix</h1>
        <InputField
          className="search-movie"
          value={searchTerm}
          placeholderText="Search for a movie here"
          onChange={handleInputChange}
          errorMessage={errorMessage}
          onKeyDown={onEnterKeyDown(handleClick)}
        />
        <button
          className="btn search-movie__button"
          onClick={handleClick}
          type="button"
        >
          Search for movies
        </button>
      </div>
      {isFetching && (
        <Loader
          headingText={getRandomStringValueFromArray(LOADER_TEXT_SAMPLES)}
        />
      )}
      {movies.length > 0 && (
        <ul className="search-movie__list">
          {movies.map(({ Title, Year, Poster }) => (
            <li
              tabIndex={0}
              className="search-movie__list-item"
              key={`${Title}-${Year}`}
              onClick={onMovieTileClick(Title)}
              onKeyDown={onEnterKeyDown(onMovieTileClick(Title))}
            >
              <MovieTile title={Title} year={Year} imageUrl={Poster} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchMovie;
