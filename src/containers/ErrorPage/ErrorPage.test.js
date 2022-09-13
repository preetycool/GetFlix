import { fireEvent, render, screen } from "@testing-library/react";
import ErrorPage from "./ErrorPage";

describe("Error Page test suite", () => {
  test("Should render error page", () => {
    render(<ErrorPage />);
    expect(
      screen.getByText("We have encountered an error"),
    ).toBeInTheDocument();
  });

  test("Should not show a button if buttonText is provided", () => {
    render(<ErrorPage buttonText="test" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("test");
  });

  test("Should trigger onClick event if button is clicked", () => {
    const onClickMock = jest.fn();
    render(<ErrorPage buttonText="test" onClick={onClickMock} />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("Should not show a button if there is no buttonText provided", () => {
    render(<ErrorPage />);
    expect(screen.queryByRole("button")).toBeFalsy();
  });
});
