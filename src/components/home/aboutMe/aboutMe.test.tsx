import { render, screen } from "@testing-library/react"
import { AboutMe } from "."

describe("<AboutMe />", () => {
    it("should render the component correctly", () => {
        render(<AboutMe />);
        const title = screen.getByText(/conheça a Dra. Lorenza/i);
        expect(title).toBeInTheDocument();
    });

    it("should render all the curriculum itens correctly", () => {
        render(<AboutMe />);
        const curriculumItems = screen.getAllByRole("listitem");
        expect(curriculumItems).toHaveLength(7);
    });

    it("should render the button to make the appointment", () => {
        render(<AboutMe />);
        const button = screen.getByText(/agende a sua consulta/i);
        expect(button).toBeInTheDocument();
    })
})