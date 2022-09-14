import { render, screen } from "@testing-library/react";
import DetailRow from "./DetailRow";
describe("Detail row test suite", () => {
  test("Should render detail row with title and value", () => {
    render(<DetailRow title="Detail" value="row" />);
    expect(screen.getByText("Detail")).toBeInTheDocument();
    expect(screen.getByText("row")).toBeInTheDocument();
  });
});
