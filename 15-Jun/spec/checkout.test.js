const Shop = require("../src/checkout");

describe("Checkout", () => {
  shop = new Shop();

  test("it returns 50 for A", () => {
    expect(shop.checkout("A")).toEqual(50);
  });

  test("it returns 30 for B", () => {
    expect(shop.checkout("B")).toEqual(30);
  });

  test("it returns 20 for C", () => {
    expect(shop.checkout("C")).toEqual(20);
  });

  test("it returns 10 for D", () => {
    expect(shop.checkout("D")).toEqual(10);
  });
});

// +------+-------+----------------+
// | Item | Price | Special offers |
// +------+-------+----------------+
// | A | 50 | 3A for 130 |
// | B | 30 | 2B for 45 |
// | C | 20 | |
// | D | 15 | |
// +------+-------+----------------+
