import { render, screen } from "@testing-library/react"
import { BlogBanner } from "."
import blogImage from "@assets/imgs/blogSection/blogSectionImage.jpg"
import blogImagePNG from "@assets/imgs/blogSection/blogSectionImageWithoutBG.png"

describe("<BlogBanner />", () => {
    it("should render the component correctly", () => {
        render(<BlogBanner />);
        const title = screen.getByText(/Blog de Nutrologia: Saúde e Ciência/i);
        expect(title).toBeInTheDocument();
    });

    it("should render the title and subtitle correctly", () => {
        render(<BlogBanner />);
        const info = document.querySelector(".info");
        expect(info).toMatchSnapshot();
    });

    it("should render the banner image correctly", () => {
        render(<BlogBanner />);
        
        const bannerImage = document.querySelector(".banner");

        expect(bannerImage).toBeInTheDocument();
        expect(bannerImage).toHaveAttribute("src", blogImage)
    });

    it("should render the banner png image correctly", () => {
        render(<BlogBanner />);

        const bannerImage = document.querySelector(".bannerPNG");

        expect(bannerImage).toBeInTheDocument();
        expect(bannerImage).toHaveAttribute("src", blogImagePNG)
    });
})