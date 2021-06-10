const scrabbleScorer = require("../src/scrabbleScorer");

describe("scrabbleScorer", () => {
  test('it scores 1 for letters "aeioulnrst', () => {
    expect(scrabbleScorer("a")).toEqual(1);
    expect(scrabbleScorer("i")).toEqual(1);
    expect(scrabbleScorer("e")).toEqual(1);
  });

  test("it scores 2 for letter d", () => {
    expect(scrabbleScorer("d")).toEqual(2);
  });
});
