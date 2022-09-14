import { act, fireEvent, screen, waitFor } from "@testing-library/react";
import { renderWithProviders } from "../../shared/utils/test-utils";
import MovieDetails from "./MovieDetails";

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

describe("Movie Details test suite", () => {
  test("should navigate user if there is no movieTitleSelected in redux state", () => {
    renderWithProviders(<MovieDetails />, {
      preloadedState: {
        movie: {},
      },
    });

    expect(mockUseNavigate).toBeCalledWith("/");
  });

  test("Should display page with the correct headings", async () => {
    await act(async () => {
      renderWithProviders(<MovieDetails />, {
        preloadedState: {
          movie: {
            selectedTitle: "Batman Begins",
          },
        },
      });
    });

    await waitFor(() => {
      expect(screen.getByText("Batman Begins")).toBeInTheDocument();
    });

    expect(screen.getByAltText("Batman Begins")).toBeInTheDocument();
    const propertiesToMap = [
      "Released",
      "Genre",
      "Director",
      "Actors",
      "Awards",
      "Metascore",
      "Ratings",
    ];
    propertiesToMap.forEach((property) =>
      expect(screen.getByText(property)).toBeInTheDocument(),
    );
  });

  test("Clicking back button should navigate the user to / route", async () => {
    await act(async () => {
      renderWithProviders(<MovieDetails />, {
        preloadedState: {
          movie: {
            selectedTitle: "Batman Begins",
          },
        },
      });
    });

    await waitFor(() => {
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockUseNavigate).toHaveBeenCalledWith("/");
  });
});
