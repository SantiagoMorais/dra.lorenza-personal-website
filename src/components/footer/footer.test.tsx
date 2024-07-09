import { render, screen } from "@testing-library/react"
import { Footer } from "."
import { BrowserRouter } from "react-router-dom"
import horizontalLogo from "@assets/imgs/homeAndNavBar/horizontalLogo.jpg"

describe("<Footer />", () => {
    it("should render the component correctly", () => {
        render(<Footer />, {wrapper: BrowserRouter});
        const cTATitle = screen.getByText(/Agende sua consulta comigo diretamente pelo WhatsApp/i);
        expect(cTATitle).toBeInTheDocument();
    });

    it("should render the logo correctly", () => {
        render(<Footer />, {wrapper: BrowserRouter});

        const logo = screen.getByAltText("logo");

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("src", horizontalLogo);
    });

    it("should render all social media links correctly", () => {
        render(<Footer />, {wrapper: BrowserRouter});
        const socialLinks = screen.getAllByRole("listitem");
        expect(socialLinks).toHaveLength(4);
    })

    it("should render all navigation buttons correctly", () => {
        render(<Footer />, {wrapper: BrowserRouter});
        const buttons = document.querySelectorAll(".section");
        expect(buttons).toHaveLength(4);
    })
})