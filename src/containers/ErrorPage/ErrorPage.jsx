import React from "react";
import { DEFAULT_ERROR_MESSAGE_TEXT } from "../../shared/constants";
import "./ErrorPage.scss";

const ErrorPage = ({
  errorMessage = DEFAULT_ERROR_MESSAGE_TEXT,
  onClick,
  buttonText,
}) => (
  <div className="error-page container">
    <h1 className="error-page__heading heading">{errorMessage}</h1>
    {buttonText && (
      <button onClick={onClick} className="btn" type="button">
        {buttonText}
      </button>
    )}
  </div>
);

export default ErrorPage;
