import { render, screen } from "@testing-library/react";
import { Home } from ".";
import { BrowserRouter } from "react-router-dom";

describe("<Home>", () => {
  it("should render the component correctly", () => {
    render(<Home />, { wrapper: BrowserRouter });
    const component = screen.getByTestId("home");
    expect(component).toBeInTheDocument();
  });
});
