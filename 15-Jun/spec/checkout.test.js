const Shop = require("../src/checkout");

describe("Checkout", () => {
  let shop;

  test("it returns 50 for A", () => {
    shop = new Shop();
    expect(shop.checkout("A")).toEqual(50);
  });

  test("it returns 30 for B", () => {
    shop = new Shop();
    expect(shop.checkout("B")).toEqual(30);
  });

  test("it returns 20 for C", () => {
    shop = new Shop();
    expect(shop.checkout("C")).toEqual(20);
  });

  test("it returns 15 for D", () => {
    shop = new Shop();
    expect(shop.checkout("D")).toEqual(15);
  });

  test("it returns 30 for DD", () => {
    shop = new Shop();
    expect(shop.checkout("DD")).toEqual(30);
  });

  test("it returns 45 for DDD", () => {
    shop = new Shop();
    expect(shop.checkout("DDD")).toEqual(45);
  });

  test("it calculates the special offer for AAA", () => {
    shop = new Shop();
    expect(shop.checkout("AAA")).toEqual(130);
  });

  test("it calculatetes the special offer for BB", () => {
    shop = new Shop();
    expect(shop.checkout("BB")).toEqual(45);
  });

  test("it calculates AAABB", () => {
    shop = new Shop();
    expect(shop.checkout("AAABB")).toEqual(175);
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
