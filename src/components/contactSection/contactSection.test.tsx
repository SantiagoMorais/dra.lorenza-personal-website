import { render, screen } from "@testing-library/react"
import { ContactSection } from "."
import { BrowserRouter } from "react-router-dom"

describe("<ContactSection>", () => {
    it("should render the component correctly", () => {
        render(<ContactSection />, {wrapper: BrowserRouter})
        const component = screen.getByTestId("contactSection");
        expect(component).toBeInTheDocument();
    });
})