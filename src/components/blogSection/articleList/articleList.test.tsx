import { fireEvent, render, screen } from "@testing-library/react";
import { ArticleList } from ".";
import { BrowserRouter } from "react-router-dom";
import { IArticleFormat } from "@utils/articlesFormat";

const mockArticles: IArticleFormat[] = Array.from({ length: 12 }, (_, index) => ({
    title: `Article ${index + 1}`,
    subtitle: `Subtitle ${index + 1}`,
    image: `image${index + 1}.jpg`,
    article: [
        {
            "topicTitle": "title",
            "paragraph": "text"
        }
    ]
}));

describe("<ArticleList />", () => {
    it("should render the component correctly", () => {
        render(<ArticleList articles={mockArticles} />, { wrapper: BrowserRouter });

        const component = screen.getByTestId("articleList");

        expect(component).toBeInTheDocument();
    });

    it("should render the initial 10 articles", () => {
        render(<ArticleList articles={mockArticles} />, { wrapper: BrowserRouter });

        const articleElements = screen.getAllByTestId("articleItem");

        expect(articleElements.length <= 10).toBeTruthy();
    });

    it("should load more articles when Load More button is clicked", () => {
        render(<ArticleList articles={mockArticles} />, { wrapper: BrowserRouter });

        const loadMoreButton = screen.getByText(/Carregar mais/i);
        fireEvent.click(loadMoreButton);

        const articleElements = screen.getAllByTestId("articleItem");
        expect(articleElements.length > 10).toBeTruthy();
    });

    it("should disable Load More button when all articles are loaded", () => {
        render(<ArticleList articles={mockArticles} />, { wrapper: BrowserRouter });

        const loadMoreButton = screen.getByText(/Carregar mais/i);

        expect(loadMoreButton).toBeEnabled();
        fireEvent.click(loadMoreButton);

        expect(loadMoreButton).toBeDisabled();
    });

    it("should load the remaining articles when less than 10 articles are left", () => {
        render(<ArticleList articles={mockArticles} />, { wrapper: BrowserRouter });

        const loadMoreButton = screen.getByText(/Carregar mais/i);
        fireEvent.click(loadMoreButton);

        //initially we start with exactly 10 articles already. Then clicking once on the loadmore button now we expect to have just 12, that is the mockArticles.lenght.
        const articleElements = screen.getAllByTestId("articleItem");
        expect(articleElements.length).toBe(mockArticles.length);
    });
});
