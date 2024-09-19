import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import { client } from "@utils/blogApi";
import { BlogSection } from ".";

describe("<BlogSection>", () => {
  it("should render the component correctly", () => {
    render(
      <BrowserRouter>
        <ApolloProvider client={client}>
          <BlogSection />
        </ApolloProvider>
      </BrowserRouter>
    );
    const component = screen.getByTestId("blogSection");
    expect(component).toBeInTheDocument();
  });
});
