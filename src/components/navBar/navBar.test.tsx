import { fireEvent, render, screen } from "@testing-library/react"
import { NavBar } from "."
import { BrowserRouter } from "react-router-dom"
import verticalLogoImage from "@assets/imgs/verticalLogo.jpg"
import horizontalLogoImage from "@assets/imgs/horizontalLogo.jpg"

function mockWindowResize(width: number) {
    window.innerWidth = width;
    window.dispatchEvent(new Event('resize'));
}

describe("NavBar", () => {
    it("should render the component correctly", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const navBarComponent = screen.getByTestId("navBar");
        expect(navBarComponent).toBeInTheDocument();
    });

    it("should render the correct logo image", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const verticalLogo = document.querySelector(".vertical")
        const horizontalLogo = document.querySelector(".horizontal")

        expect(verticalLogo).toBeInTheDocument()
        expect(horizontalLogo).toBeInTheDocument()

        expect(verticalLogo).toHaveAttribute("src", verticalLogoImage)
        expect(horizontalLogo).toHaveAttribute("src", horizontalLogoImage)
    })

    it("should render the schedule appointment and whatsApp buttons", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const buttons = document.querySelector(".list")
        expect(buttons).toMatchSnapshot();
    });

    it("should the buttons' icon be rendered correctly", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const icons = document.querySelectorAll(".icon");
        expect(icons).toMatchSnapshot();
    })

    it("should render all pages' link", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const pagesLink = document.querySelectorAll(".page");
        expect(pagesLink).toHaveLength(4)
    })

    it("should the accordion icon changes when clicked", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const icon = screen.getByTestId("accordionIcon")
        const button = screen.getByTestId("openWindowButton")

        expect(icon).toBeInTheDocument();
        expect(button).toBeInTheDocument();
        expect(icon).not.toHaveClass("accordionOppened");

        mockWindowResize(767)
        fireEvent.click(button);
        expect(icon).toHaveClass("accordionOppened");
    })
})