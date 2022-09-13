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
});
