import { render } from "@testing-library/react"
import { Header } from "."
import { BrowserRouter } from "react-router-dom"
import verticalLogoImage from "@assets/imgs/verticalLogo.jpg"
import horizontalLogoImage from "@assets/imgs/horizontalLogo.jpg"

describe("<Header />", () => {
    it("should render the correct logo image", () => {
        render(<Header />, { wrapper: BrowserRouter });
        const verticalLogo = document.querySelector(".vertical")
        const horizontalLogo = document.querySelector(".horizontal")

        expect(verticalLogo).toBeInTheDocument()
        expect(horizontalLogo).toBeInTheDocument()

        expect(verticalLogo).toHaveAttribute("src", verticalLogoImage)
        expect(horizontalLogo).toHaveAttribute("src", horizontalLogoImage)
    });

    it("should render the schedule appointment and whatsApp buttons", () => {
        render(<Header />, { wrapper: BrowserRouter });
        const buttons = document.querySelector(".list")
        expect(buttons).toMatchSnapshot();
    });

    it("should the buttons' icon be rendered correctly", () => {
        render(<Header />, { wrapper: BrowserRouter });
        const icons = document.querySelectorAll(".icon");
        expect(icons).toMatchSnapshot();
    })
})