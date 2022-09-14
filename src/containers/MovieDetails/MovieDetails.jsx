/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import "./MovieDetails.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailRow from "../../components/DetailRow/DetailRow";
import ErrorPage from "../ErrorPage/ErrorPage";
import Loader from "../../components/Loader/Loader";
import { useGetMovieDetailsQuery } from "../../redux/api/apiSlice";
import { movieApi } from "../../redux/api/apiSlice";
import {
  LOADER_TEXT_SAMPLES,
  TRY_AGAIN_BUTTON_TEXT,
} from "../../shared/constants";
import { getRandomStringValueFromArray } from "../../shared/utils/utils";
import { useState } from "react";

const MovieDetails = () => {
  const navigate = useNavigate();
  const movieTitleSelected = useSelector((state) => state.movie.selectedTitle);
  const [movieDetails, setMovieDetails] = useState({});

  const [getMovieDetails, { isFetching, isError }] =
    movieApi.endpoints.getMovieDetails.useLazyQuery();

  useEffect(() => {
    const getMovieData = async () => {
      const { data } = await getMovieDetails(movieTitleSelected);
      setMovieDetails({ ...data });
    };
    if (!movieTitleSelected) {
      navigate("/");
    } else {
      getMovieData();
    }
  }, [movieTitleSelected]);

  const mapMovieDetails = () => {
    const propertiesToMap = [
      "Released",
      "Genre",
      "Director",
      "Actors",
      "Awards",
      "Metascore",
    ];
    return propertiesToMap.map((property) => {
      if (movieDetails[property]) {
        return (
          <DetailRow
            key={`${property}-${movieDetails[property]}`}
            title={property}
            value={movieDetails[property]}
          />
        );
      }
      return null;
    });
  };

  if (isError) {
    return (
      <ErrorPage
        errorMessage="We have ran into an error"
        onClick={() => refetch()}
        buttonText={TRY_AGAIN_BUTTON_TEXT}
      />
    );
  }

  return (
    <div className="container">
      <button
        className="btn back-button"
        onClick={() => navigate("/")}
        type="button"
      >
        &#60; Back
      </button>
      {isFetching ? (
        <Loader
          headingText={getRandomStringValueFromArray(LOADER_TEXT_SAMPLES)}
        />
      ) : (
        <section className="movie-details">
          <h1 className="movie-details__heading heading">Movie Details</h1>
          <h2 className="movie-details__title">{movieDetails.Title}</h2>
          <img
            className="movie-details__image"
            src={movieDetails.Poster}
            alt={movieDetails.Title}
          />
          {movieDetails?.Ratings?.length > 0 && (
            <div className="movie-details__ratings">
              <h2 className="movie-details__ratings__heading">Ratings</h2>
              <div className="movie-details__ratings__raters">
                {movieDetails.Ratings.map(
                  ({ Source: source, Value: value }) => (
                    <DetailRow
                      key={`${source}-${value}`}
                      title={source}
                      value={value}
                    />
                  ),
                )}
              </div>
            </div>
          )}
          {Object.keys(movieDetails).length > 0 && mapMovieDetails()}
        </section>
      )}
    </div>
  );
};

export default MovieDetails;
