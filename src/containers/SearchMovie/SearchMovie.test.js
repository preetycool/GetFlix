import { fireEvent, screen } from "@testing-library/react";
import { renderWithProviders } from "../../shared/utils/test-utils";
import { BrowserRouter } from "react-router-dom";
import SearchMovie from "./SearchMovie";

const mockUseNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Getflix test suite", () => {
  test("should load the SearchMovie page and display the heading, input and button", () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchMovie />
      </BrowserRouter>,
      { preloadedState: {} },
    );
    expect(screen.getByText("Welcome to GetFlix")).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Search for a movie here"),
    ).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  test("Should display error if the button is clicked without entering any value", () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchMovie />
      </BrowserRouter>,
      { preloadedState: {} },
    );
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(screen.getByText("Please enter a movie title")).toBeInTheDocument();
  });

  test("Should display a list of movies based off what is in the store", () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchMovie />
      </BrowserRouter>,
      {
        preloadedState: {
          movie: {
            listOfMovieTitlesBasedOffSearch: [
              {
                Title: "The ABC Murders",
                Year: "2018",
                imdbID: "tt8463714",
                Type: "series",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
              },
            ],
          },
        },
      },
    );
    expect(screen.getByText("The ABC Murders")).toBeInTheDocument();
  });

  test("Clicking on a movie should redirect the user to the /movie route", () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchMovie />
      </BrowserRouter>,
      {
        preloadedState: {
          movie: {
            listOfMovieTitlesBasedOffSearch: [
              {
                Title: "The ABC Murders",
                Year: "2018",
                imdbID: "tt8463714",
                Type: "series",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
              },
            ],
          },
        },
      },
    );
    const movieTile = screen.getByText("The ABC Murders");
    fireEvent.click(movieTile);

    expect(mockUseNavigate).toBeCalledWith("/movie");
  });

  test("Clicking on a movie should redirect the user to the /movie route", () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchMovie />
      </BrowserRouter>,
      {
        preloadedState: {
          movie: {
            listOfMovieTitlesBasedOffSearch: [
              {
                Title: "The ABC Murders",
                Year: "2018",
                imdbID: "tt8463714",
                Type: "series",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
              },
            ],
          },
        },
      },
    );
    const movieTile = screen.getByText("The ABC Murders");
    fireEvent.click(movieTile);

    expect(mockUseNavigate).toBeCalledWith("/movie");
  });

  test("Clicking on a movie should redirect the user to the /movie route", () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchMovie />
      </BrowserRouter>,
      {
        preloadedState: {
          movie: {
            listOfMovieTitlesBasedOffSearch: [
              {
                Title: "The ABC Murders",
                Year: "2018",
                imdbID: "tt8463714",
                Type: "series",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
              },
            ],
          },
        },
      },
    );
    const movieTile = screen.getByText("The ABC Murders");
    fireEvent.click(movieTile);

    expect(mockUseNavigate).toBeCalledWith("/movie");
  });

  test("Changing input will remove all movies listed", () => {
    renderWithProviders(
      <BrowserRouter>
        <SearchMovie />
      </BrowserRouter>,
      {
        preloadedState: {
          movie: {
            listOfMovieTitlesBasedOffSearch: [
              {
                Title: "The ABC Murders",
                Year: "2018",
                imdbID: "tt8463714",
                Type: "series",
                Poster:
                  "https://m.media-amazon.com/images/M/MV5BYmJmNzU0NTgtOGM5Ni00MWJiLTgwZmMtNDIyNjYzZDAzNzI5XkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg",
              },
            ],
          },
        },
      },
    );
    expect(screen.getByText("The ABC Murders")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Search for a movie here");
    fireEvent.change(input, { target: { value: "hello" } });
    expect(screen.queryByText("The ABC Murders")).toBeFalsy();
  });
});
