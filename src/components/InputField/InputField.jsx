import React from "react";
import "./InputField.scss";

const InputField = ({
  value,
  placeholderText = "",
  errorMessage,
  onChange,
  onKeyDown,
}) => (
  <div className="input-field">
    <input
      className="input-field__input"
      type="text"
      onChange={onChange}
      value={value}
      placeholder={placeholderText}
      onKeyDown={onKeyDown}
    />
    {errorMessage && (
      <p className="input-field__error-message">{errorMessage}</p>
    )}
  </div>
);

export default InputField;
