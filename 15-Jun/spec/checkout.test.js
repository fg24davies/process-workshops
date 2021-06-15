const Shop = require("../src/checkout");

describe("Checkout", () => {
  shop = new Shop();

  test("it returns 50 for A", () => {
    expect(shop.checkout("A")).toEqual(50);
  });

  test("it returns 30 for B", () => {
    expect(shop.checkout("B")).toEqual(30);
  });
});
