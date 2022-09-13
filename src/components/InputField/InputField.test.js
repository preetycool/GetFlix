import { fireEvent, render, screen } from "@testing-library/react";
import InputField from "./InputField";

describe("Input field test suite", () => {
  test("it should display an input with appropriate placeholder text", () => {
    render(<InputField placeholderText="Test placeholder" />);
    const input = screen.getByPlaceholderText("Test placeholder");
    expect(input).toBeInTheDocument();
  });

  test("it should show error message if errorMessage is present", () => {
    render(
      <InputField placeholderText="Test placeholder" errorMessage="error" />,
    );
    const error = screen.getByText("error");
    expect(error).toBeInTheDocument();
  });

  test("it should not show error message if errorMessage is not present", () => {
    render(<InputField placeholderText="Test placeholder" />);
    const error = screen.queryByText("error");
    expect(error).toBeFalsy();
  });

  test("it should call onChange if an onChange event is fired", () => {
    const onChangeMock = jest.fn();
    render(
      <InputField placeholderText="Test placeholder" onChange={onChangeMock} />,
    );
    const input = screen.getByPlaceholderText("Test placeholder");

    fireEvent.change(input, { target: { value: "blah" } });
    expect(onChangeMock).toHaveBeenCalled();
  });

  test("it should call onKeyDown if an onKeyDown event is fired", () => {
    const onKeyDown = jest.fn();
    render(
      <InputField placeholderText="Test placeholder" onKeyDown={onKeyDown} />,
    );
    const input = screen.getByPlaceholderText("Test placeholder");

    fireEvent.keyDown(input, { key: "Enter", code: "Enter" });
    expect(onKeyDown).toHaveBeenCalled();
  });

  test("it should display an input no placeholder text if it's not passed to input", () => {
    render(<InputField />);
    const input = screen.getByPlaceholderText("");
    expect(input).toBeInTheDocument();
  });
});
