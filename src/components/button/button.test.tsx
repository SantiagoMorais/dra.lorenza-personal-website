import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { faCircle, faSquare } from "@fortawesome/free-regular-svg-icons";

describe("button", () => {
  it("should render the component correctly", () => {
    render(<Button content="example" icon={faCircle} href="google.com" />);
    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
  });

  it("should the component receive the prop content correctly", () => {
    const textToBeRender = "example";
    render(
      <Button content={textToBeRender} icon={faCircle} href="google.com" />
    );

    const content = screen.getByText(textToBeRender);
    expect(content).toBeInTheDocument();
  });

  it("should the component receive the prop icon correctly", () => {
    render(<Button content="example" icon={faCircle} href="google.com" />);
    const icon = screen.getByTestId("icon");

    expect(icon).toHaveAttribute("data-icon", faCircle.iconName);
    expect(icon).toHaveClass("fa-circle");
    expect(icon).not.toHaveAttribute("data-icon", faSquare.iconName);
  });

  it("should render the link with the correct href", () => {
    const href = "http://youtube.com";
    render(<Button content="example" icon={faCircle} href={href} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", href);
  });
});
