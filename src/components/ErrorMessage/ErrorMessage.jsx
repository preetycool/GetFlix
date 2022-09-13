import React from "react";

const ErrorMessage = ({ errorMessage, onClick }) => (
  <div className="error">
    <p>{errorMessage}</p>
    <button onClick={onClick} type="button">
      Try again?
    </button>
  </div>
);

export default ErrorMessage;
