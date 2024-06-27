import { render, screen } from "@testing-library/react"
import { Treatments } from "."
import { BrowserRouter } from "react-router-dom";

describe("<Treatments />", () => {
    it("should render the component correctly", () => {
        render(<Treatments />, {wrapper: BrowserRouter})
        const title = screen.getByText(/nossos serviços/i);
        expect(title).toBeInTheDocument();
    });
})



