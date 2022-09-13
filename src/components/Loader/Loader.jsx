import React from "react";
import Lottie from "lottie-react";
import movieAnimation from "../../animations/movieAnimation.json";
import "./Loader.scss";

const Loader = ({ headingText = "" }) => (
  <div className="loader">
    <Lottie animationData={movieAnimation} loop={true} />
    {headingText && <h1 className="loader__heading">{headingText}</h1>}
  </div>
);

export default Loader;
