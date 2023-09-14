import { faker } from "@faker-js/faker";

export function createRandomProduct(): Product {
  return {
    id: faker.database.mongodbObjectId(),
    name: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.number.float(),
    units: faker.number.int(),
  };
}

export const PRODUCTS: any[] = faker.helpers.multiple(createRandomProduct, {
  count: 2,
});
