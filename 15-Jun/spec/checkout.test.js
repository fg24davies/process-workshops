const Shop = require("../src/checkout");

describe("Checkout", () => {
  shop = new Shop();
  test("it returns 50 for A", () => {
    expect(shop.checkout("A")).toEqual(50);
  });
});
