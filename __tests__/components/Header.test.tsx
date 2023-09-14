import Header from "@/app/components/Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("should render the component with Tradehub Text inside <h2> tag with class text-2xl", () => {
    // Arrange
    render(<Header />);

    // Act
    const heading = screen.getByRole("heading");
    const logo = screen.getByText("Tradehub");

    // Assert
    expect(heading).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveClass("text-2xl");
  });

  it("should have a link to the homepage with the text 'New'", () => {
    // Arrange
    render(<Header />);

    // Act
    const linkElement = screen.getByText("New");

    // Assert
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });
});
