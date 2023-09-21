import { GET } from "@/app/api/products/route";
import { API } from "@/app/constants/api";
import { createMocks } from "node-mocks-http";
import { PRODUCTS } from "../../__fixtures__/product.faker";

describe("Products API", () => {
  it("should return list of products with status Ok", async () => {
    // Arrange
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(PRODUCTS),
    });

    const { req } = createMocks({
      method: "GET",
    });

    // Act
    const response = await GET(req);
    const result = await response.json();

    // Assert
    expect(global.fetch).toHaveBeenCalledWith(API.URL.GetProducts);
    expect(response.status).toBe(200);
    expect(result).toEqual({ data: PRODUCTS, message: API.Response.SUCCESS });
  });

  it("should handle an API error and return status 500", async () => {
    // Arrange
    global.fetch = jest.fn().mockResolvedValue(new Error());

    const { req } = createMocks({
      method: "GET",
    });

    // Act
    const response = await GET(req);
    const result = await response.json();

    // Assert
    expect(response.status).toBe(500);
    expect(result).toEqual({ message: API.Response.ERROR });
  });
});
