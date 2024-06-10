import { render, screen } from "@testing-library/react"
import { Treatments } from "."

describe("<Treatments />", () => {
    beforeEach(() => {
        vi.resetAllMocks();
    })

    it("should render the component correctly", () => {
        render(<Treatments />)
        const title = screen.getByText(/seja bem-vindo ao site/i);
        expect(title).toBeInTheDocument();
    });

    it("should render all carousel items correctly", () => {
        render(<Treatments />);
        const carouselItems = document.querySelectorAll(".itemTitle");
        expect(carouselItems).toHaveLength(6)
    });

    it("should render all carousel images correctly", () => {
        render(<Treatments />);
        const carouselImages = screen.getAllByRole("img");
        carouselImages.forEach(image => {
            expect(image).toHaveAttribute("src");
            expect(image.getAttribute("src")).not.toBe(null || undefined);
            expect(image.getAttribute("src")).not.toBe("");
        })
    });

    it("should render the title of the carousel items correctly", () => {
        render(<Treatments />);
        const titles = document.querySelectorAll(".itemTitle");
        titles.forEach(title => {
            const textContent = title.textContent;
            expect(textContent).not.toBeNull();
            expect(textContent).not.toBe('');
            expect(textContent).toBeDefined();
        })
    });

    it("should render the swipe correctly", () => {
        render(<Treatments />);
        const swiper = document.querySelector(".swiper");
        expect(swiper).toBeInTheDocument();
    });
})



