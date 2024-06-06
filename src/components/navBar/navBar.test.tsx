import { fireEvent, render, screen } from "@testing-library/react"
import { NavBar } from "."
import { BrowserRouter } from "react-router-dom"



describe("NavBar", () => {
    it("should render the component correctly", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const navBarComponent = screen.getByTestId("navBar");
        expect(navBarComponent).toBeInTheDocument();
    });

    it("should render the correct logo image", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const logo = screen.getByRole("img");

        expect(logo).toBeInTheDocument()
        expect(logo).toHaveAttribute("src", "")
    })

    it("should render the schedule appointment and whatsapp buttons", () => {
        render(<NavBar />, { wrapper: BrowserRouter });
        const listItems = document.querySelectorAll(".listItem");
        expect(listItems).toHaveLength(2);
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
        const accordionIcon = screen.getByTestId("accordionIcon")

        expect(accordionIcon.classList.contains("accordionOppened")).toBeFalsy()
        
        fireEvent.click(accordionIcon)
        expect(accordionIcon.classList.contains("accordionOppened")).toBeTruthy()
    })
})