import { render, screen } from "@testing-library/react";
import { ErrorComponent } from ".";

describe("<ErrorComponent />", () => {
  it("should render the component correctly", () => {
    render(<ErrorComponent />);
    const title = screen.getByText(/ERRO 404 - Publicações não encontradas/i);
    expect(title).toBeInTheDocument();
  });
});
