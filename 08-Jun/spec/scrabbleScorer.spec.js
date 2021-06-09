const scrabbleScorer = require("../src/scrabbleScorer");

describe("scrabbleScorer", () => {
  test("it scores 1 for letter a", () => {
    expect(scrabbleScorer("a")).toEqual(1);
  });

  test("it scores 2 for letter d", () => {
    expect(scrabbleScorer("d")).toEqual(2);
  });

  test("it scores 1 for letter e", () => {
    expect(scrabbleScorer("e")).toEqual(1);
  });
});
