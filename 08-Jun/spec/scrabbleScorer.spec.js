const scrabbleScorer = require("../src/scrabbleScorer");

describe("scrabbleScorer", () => {
  test("it scores 1 for letter a", () => {
    expect(scrabbleScorer("a")).toEqual(1);
  });
});
