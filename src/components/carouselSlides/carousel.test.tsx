import { render, screen } from "@testing-library/react";
import { CarouselSlides, ICarouselInfo } from ".";

describe("<Treatments />", () => {
  const exampleListIems: ICarouselInfo[] = [
    { id: 1, image: "example" },
    { id: 2, image: "example" },
    { id: 3, image: "example" },
  ];

  it("should render the swipe correctly", () => {
    render(<CarouselSlides info={exampleListIems} slidesNumber={2} />);
    const swiper = document.querySelector(".swiper");
    expect(swiper).toBeInTheDocument();
  });

  it("should render all carousel items correctly", () => {
    render(<CarouselSlides info={exampleListIems} slidesNumber={2} />);
    const carouselItems = document.querySelectorAll(".slide");
    expect(carouselItems).toHaveLength(3);
  });

  it("should render all carousel images correctly", () => {
    render(<CarouselSlides info={exampleListIems} slidesNumber={2} />);
    const carouselImages = screen.getAllByRole("img");
    carouselImages.forEach((image) => {
      expect(image).toHaveAttribute("src");
      expect(image.getAttribute("src")).not.toBe(null || undefined);
      expect(image.getAttribute("src")).not.toBe("");
    });
  });
});
