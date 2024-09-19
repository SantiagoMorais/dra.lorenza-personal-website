import { fireEvent, render, screen } from "@testing-library/react";
import { NavBar } from ".";
import { BrowserRouter } from "react-router-dom";

function mockWindowResize(width: number) {
  window.innerWidth = width;
  window.dispatchEvent(new Event("resize"));
}

describe("NavBar", () => {
  it("should render the component correctly", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const navBarComponent = screen.getByTestId("navBar");
    expect(navBarComponent).toBeInTheDocument();
  });

  it("should render all pages' link", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const pagesLink = document.querySelectorAll(".page");
    expect(pagesLink).toHaveLength(4);
  });

  it("should the accordion icon changes when clicked", () => {
    render(<NavBar />, { wrapper: BrowserRouter });
    const icon = screen.getByTestId("accordionIcon");
    const button = screen.getByTestId("openWindowButton");

    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(icon).not.toHaveClass("accordionOppened");

    mockWindowResize(767);
    fireEvent.click(button);
    expect(icon).toHaveClass("accordionOppened");
  });
});
