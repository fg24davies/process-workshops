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

  test("it returns 15 for D", () => {
    expect(shop.checkout("D")).toEqual(15);
  });

  test("it returns 30 for DD", () => {
    expect(shop.checkout("DD")).toEqual(30);
  });

  test("it returns 45 for DDD", () => {
    expect(shop.checkout("DDD")).toEqual(45);
  });

  test("it calcualtes the special offer for AAA", () => {
    expect(shop.checkout("AAA")).toEqual(130);
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
