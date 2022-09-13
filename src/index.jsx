import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import MovieDetails from "./containers/MovieDetails/MovieDetails";
import { store } from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/movie" element={<MovieDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
