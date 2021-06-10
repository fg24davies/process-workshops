const scrabbleScorer = require("../src/scrabbleScorer");

describe("scrabbleScorer", () => {
  test("it scores 1 for letters aeioulnrst ", () => {
    expect(scrabbleScorer("a")).toEqual(1);
    expect(scrabbleScorer("i")).toEqual(1);
    expect(scrabbleScorer("e")).toEqual(1);
  });

  test("it scores 2 for letters d, g", () => {
    expect(scrabbleScorer("d")).toEqual(2);
    expect(scrabbleScorer("g")).toEqual(2);
  });
});
