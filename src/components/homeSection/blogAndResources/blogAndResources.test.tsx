import { fireEvent, render, screen } from "@testing-library/react";
import { BlogAndResources } from ".";
import { BrowserRouter } from "react-router-dom";
import { instagramLink } from "@styles/variables";
import { NavBarContext } from "@contexts/navBarContext";

const mockContextValue = {
    setCurrentLink: vi.fn(),
    currentLink: "home"
};

describe("<BlogAndResources />", () => {
    it("should render the component correctly", () => {
        render(<BlogAndResources />, { wrapper: BrowserRouter });
        const title = screen.getByText(/Acesse nosso blog para dicas de saúde, receitas e mais./i);
        expect(title).toBeInTheDocument();
    });

    it("should the instagram button redirect the user to the correct path", () => {
        render(<BlogAndResources />, { wrapper: BrowserRouter })

        const instagram = screen.getByRole("link", { name: /instagram/i });

        expect(instagram).toHaveAttribute("href", instagramLink);
    });

    it("should the blog button update context correctly", () => {
        render(
            <BrowserRouter>
                <NavBarContext.Provider value={mockContextValue}>
                    <BlogAndResources />
                </NavBarContext.Provider>
            </BrowserRouter>
        );

        const readBlogButton = screen.getByText(/Leia nosso blog/i);
        fireEvent.click(readBlogButton);

        expect(mockContextValue.setCurrentLink).toHaveBeenCalledWith('blog');
    });

    it("should render the texts and visual elements from the component", () => {
        render(<BlogAndResources />, { wrapper: BrowserRouter });
        const titleElement = screen.getByText(/Explore ainda mais conteúdos sobre nutrologia!/i);
        expect(titleElement).toBeInTheDocument();

        const subtitleElement = screen.getByText(/Me siga no instagram!/i);
        expect(subtitleElement).toBeInTheDocument();

        const readBlogButton = screen.getByText(/Leia nosso blog/i);
        expect(readBlogButton).toBeInTheDocument();

        const instagramButton = screen.getByRole("link", {name: /Instagram/i});
        expect(instagramButton).toBeInTheDocument();

        const instagramImage = document.querySelector(".instagram")
        expect(instagramImage).toBeInTheDocument();

        const lorenzaImage = document.querySelector(".lorenzaImage")
        expect(lorenzaImage).toBeInTheDocument();
    });


})