import { render, screen } from "@testing-library/react"
import { CaringBeyondMethodology } from "."

describe("<CaringBeyondMethodology />", () => {
    it("should render the component correctly", () => {
        render(<CaringBeyondMethodology />)
        const title = screen.getByText(/Nossa Abordagem: Cuidar Além/i);
        expect(title).toBeInTheDocument();
    });

    it("should render the image correctly", () => {
        render(<CaringBeyondMethodology />)
        const image = screen.getByAltText(/imagem da metodologia 'Cuidar Além'/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", "https://placehold.co/300x300")
    });

    it("should render all topics from the methodology correctly", () => {
        render(<CaringBeyondMethodology />);
        const topics = screen.getAllByRole("listitem");
        expect(topics).toHaveLength(3);
    })
})