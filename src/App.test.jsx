import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

describe("Getflix test suite", () => {
  it("should display the ho me page", () => {
    const { getByText } = render(<App />);

    expect(getByText("Hello world!")).toBeTruthy();
  });
});
