import { screen } from "@testing-library/react";
import App from "./App";
import { renderWithProviders } from "./shared/utils/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("Getflix test suite", () => {
  test("should load the SearchMovie page", () => {
    renderWithProviders(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      { preloadedState: {} },
    );
    expect(screen.getByText("Welcome to GetFlix")).toBeInTheDocument();
  });
});
