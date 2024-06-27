import { render, screen } from "@testing-library/react"
import { Treatments } from "."

describe("<Treatments />", () => {
    it("should render the component correctly", () => {
        render(<Treatments />)
        const title = screen.getByText(/nossos serviços/i);
        expect(title).toBeInTheDocument();
    });
})



