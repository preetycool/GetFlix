/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable operator-linebreak */
import "./MovieDetails.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DetailRow from "../../components/DetailRow/DetailRow";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/Loader/Loader";
import { useGetMovieDetailsQuery } from "../../redux/api/apiSlice";
import { LOADER_TEXT_SAMPLES } from "../../shared/constants";
import { getRandomStringValueFromArray } from "../../shared/utils/utils";

const MovieDetails = () => {
  const navigate = useNavigate();
  const movieTitleSelected = useSelector((state) => state.movie.selectedTitle);

  useEffect(() => {
    if (!movieTitleSelected) {
      navigate("/");
    }
  }, [movieTitleSelected]);

  const {
    data: movieDetails,
    isFetching,
    isError,
    refetch,
  } = useGetMovieDetailsQuery(movieTitleSelected);

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
      <ErrorMessage
        errorMessage="We have ran into an error"
        onClick={() => refetch()}
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
          <h1 className="movie-details__heading">Movie Details</h1>
          <h2 className="movie-details__title">{movieDetails.Title}</h2>
          <img
            className="movie-details__image"
            src={movieDetails.Poster}
            alt={movieDetails.Title}
          />
          {Object.keys(movieDetails).length > 0 && mapMovieDetails()}
        </section>
      )}
    </div>
  );
};

export default MovieDetails;
