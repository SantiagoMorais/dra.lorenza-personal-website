import { render, screen } from "@testing-library/react"
import { SectionEmpty } from "."
import componentImage from "@assets/imgs/emptySectionImage/emptySectionImage.png"

describe("<SectionEmpty />", () => {
    it("should render the component correctly", () => {
        render(<SectionEmpty />);
        const title = screen.getByText(/Novidades em breve/i);
        expect(title).toBeInTheDocument();
    });

    it("should render the message correctly", () => {
        render(<SectionEmpty />);
        const message = screen.getByText("Teremos novas publicações em breve com mais conteúdos sobre nutrologia para você!")
        expect(message).toBeInTheDocument();
    });

    it("should render the image correctly", () => {
        render(<SectionEmpty />);
        const image = screen.getByRole("img");
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute("src", componentImage);
    });
})