import { render } from "@testing-library/react"
import { Hero } from "."
import image from "@assets/imgs/heroImage.jpg"

describe("hero", () => {
    it("should render the component correctly", () => {
        render(<Hero />)
        const heroImage = document.querySelector(".heroImage");
        expect(heroImage).toBeInTheDocument();
    })

    it("should render the correct image", () => {
        render(<Hero />)
        const heroImage = document.querySelector(".heroImage");
        expect(heroImage).toHaveAttribute("src", image);
    })
})