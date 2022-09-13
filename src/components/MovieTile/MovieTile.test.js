import {
  screen,
  getByAltText,
  getByText,
  render,
} from "@testing-library/react";
import MovieTile from "./MovieTile";
import React from "react";

test("it should render a movie tile with correct title year and imageurl", () => {
  render(<MovieTile title="test title" year="2000" imageUrl="test.com" />);

  expect(screen.getByText("test title")).toBeInTheDocument();
  expect(screen.getByText("2000")).toBeInTheDocument();
  expect(screen.getByAltText("test title")).toBeInTheDocument();
});

test("it should not show title p tag if it's not present", () => {
  const { container } = render(<MovieTile year="2000" imageUrl="test.com" />);
  const elements = container.getElementsByClassName("movie-tile__text");
  expect(elements.length).toBe(1);
  expect(elements[0]).toHaveTextContent("2000");
});

test("it should not show the year p tag if it's not present", () => {
  const { container } = render(
    <MovieTile title="test title" imageUrl="test.com" />,
  );
  const elements = container.getElementsByClassName("movie-tile__text");
  expect(elements.length).toBe(1);
  expect(elements[0]).toHaveTextContent("test title");
});

test("it should not show the image if image url is not present", () => {
  const { container } = render(<MovieTile />);
  const elements = container.getElementsByClassName("movie-tile__image");
  expect(elements.length).toBe(0);
});
