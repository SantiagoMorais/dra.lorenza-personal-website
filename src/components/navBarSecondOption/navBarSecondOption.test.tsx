import { fireEvent, render, screen } from "@testing-library/react"
import { NavBarSecondOption } from "."
import { BrowserRouter } from "react-router-dom"
import verticalLogoImage from "@assets/imgs/verticalLogo.jpg"
import horizontalLogoImage from "@assets/imgs/horizontalLogo.jpg"

describe("NavBar", () => {
    it("should render the component correctly", () => {
        render(<NavBarSecondOption />, { wrapper: BrowserRouter });
        const navBarComponent = screen.getByTestId("navBar");
        expect(navBarComponent).toBeInTheDocument();
    });

    it("should render the correct logo image", () => {
        render(<NavBarSecondOption />, { wrapper: BrowserRouter });
        const verticalLogo = document.querySelector(".vertical")
        const horizontalLogo = document.querySelector(".horizontal")

        expect(verticalLogo).toBeInTheDocument()
        expect(horizontalLogo).toBeInTheDocument()

        expect(verticalLogo).toHaveAttribute("src", verticalLogoImage)    
        expect(horizontalLogo).toHaveAttribute("src", horizontalLogoImage)    
    })

    it("should render the schedule appointment and whatsapp buttons", () => {
        render(<NavBarSecondOption />, { wrapper: BrowserRouter });
        const buttons = screen.getAllByRole("button");
        expect(buttons).toHaveLength(2);
    });

    it("should the buttons' icon be rendered correctly", () => {
        render(<NavBarSecondOption />, { wrapper: BrowserRouter });
        const icons = document.querySelectorAll(".icon");
        expect(icons).toMatchSnapshot();
    })

    it("should render all pages' link", () => {
        render(<NavBarSecondOption />, { wrapper: BrowserRouter });
        const pagesLink = document.querySelectorAll(".page");
        expect(pagesLink).toHaveLength(4)
    })

    it("should the accordion icon changes when clicked", () => {
        render(<NavBarSecondOption />, { wrapper: BrowserRouter });
        const accordionIcon = screen.getByTestId("accordionIcon")

        expect(accordionIcon.classList.contains("accordionOppened")).toBeFalsy()
        
        fireEvent.click(accordionIcon)
        expect(accordionIcon.classList.contains("accordionOppened")).toBeTruthy()
    })
})