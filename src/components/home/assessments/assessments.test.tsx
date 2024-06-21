import { render, screen } from "@testing-library/react"
import { Assessments } from "."
import { doctoraliaLink } from "@styles/variables";
import doctoraliaIcon from "@assets/imgs/doctoralia-icon.png"

describe("<Assessments />", () => {
    it("should render the component correctly", () => {
        render(<Assessments />);
        const title = screen.getByText(/veja as avaliações da dra.lorenza arruda!/i);
        expect(title).toBeInTheDocument();
    });

    it("should render all carousel info correctly", () => {
        render(<Assessments />);
        const slides = document.querySelectorAll(".slide");
        expect(slides).toHaveLength(6)
    });

    it("should redirect the user to the correct link", () => {
        render(<Assessments />);
        const link = screen.getByRole("link");
        expect(link).toHaveAttribute("href", doctoraliaLink);
    })

    it("should render the icon image correctly", () => {
        render(<Assessments />);
        const icon = screen.getByAltText(/ícone doctoralia/i);
        expect(icon).toHaveAttribute("src", doctoraliaIcon);
    })
})