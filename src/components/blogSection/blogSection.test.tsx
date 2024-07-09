import { render, screen } from "@testing-library/react"
import { BlogSection } from "."
import { BrowserRouter } from "react-router-dom"

describe("<BlogSection>", () => {
    it("should render the component correctly", () => {
        render(<BlogSection />, {wrapper: BrowserRouter})
        const component = screen.getByTestId("blogSection");
        expect(component).toBeInTheDocument();
    });
})