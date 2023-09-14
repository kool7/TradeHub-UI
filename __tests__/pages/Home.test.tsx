import Home from "@/app/page";
import { render, screen, within } from "@testing-library/react";
import { PRODUCTS } from "../__fixtures__/product.faker";

describe("Home Page", () => {
  describe("Render", () => {
    it("should render a <ul> element", async () => {
      // Arrange
      render(await Home());

      // Act
      const unorderedList = screen.getByRole("list");

      // Assert
      expect(unorderedList).toBeInTheDocument();
    });

    it("should render <li> elements for each product", async () => {
      // Arrange
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(PRODUCTS),
      });
      render(await Home());

      // Act
      const listItems = screen.getAllByRole("listitem");

      // Assert
      expect(listItems).toHaveLength(2);
    });

    it("each <li> element contains an <h2> element'", async () => {
      // Arrange
      render(await Home());

      // Act
      const listItems = screen.queryAllByRole("listitem");

      // Assert
      listItems.forEach((li) => {
        const { getByRole } = within(li);
        const heading = getByRole("heading", { level: 2 });
        expect(heading).toBeInTheDocument();
      });
    });

    it("each <li> element contains the text 'Units'", async () => {
      // Arrange
      render(await Home());

      // Act
      const listItems = screen.queryAllByRole("listitem");

      // Assert
      listItems.forEach((li) => {
        const textContent = li.textContent;
        expect(textContent).toContain("Units");
      });
    });

    it("each <li> element contains the text 'Price'", async () => {
      // Arrange
      render(await Home());

      // Act
      const listItems = screen.queryAllByRole("listitem");

      // Assert
      listItems.forEach((li) => {
        const textContent = li.textContent;
        expect(textContent).toContain("Price");
      });
    });

    it("should render the page with correct products data", async () => {
      // Arrange
      render(await Home());

      // Act
      const name = screen.getByText(PRODUCTS[0].name);
      const description = screen.getByText(PRODUCTS[0].description);
      const units = screen.getByText(PRODUCTS[0].units, { exact: false });
      const price = screen.getByText(PRODUCTS[0].price, { exact: false });

      // Assert
      expect(name).toBeInTheDocument();
      expect(description).toBeInTheDocument();
      expect(units).toBeInTheDocument();
      expect(price).toBeInTheDocument();
    });

    it("should render the page with all products data", async () => {
      // Arrange
      render(await Home());

      // Act
      const productNames = PRODUCTS.map((product) => product.name);
      const foundElements = screen.queryAllByText((content) => {
        return productNames.includes(content);
      });

      // Assert
      expect(foundElements).toHaveLength(productNames.length);
    });

    it("should renders 'No data available' message when there are no products", async () => {
      // Arrange
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([]),
      });
      render(await Home());

      // Act
      const noProductsMessage = screen.getByText("No data available.");

      // Assert
      expect(noProductsMessage).toBeInTheDocument();
    });
  });
});
