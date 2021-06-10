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

  test("it scores 3 for letters bcmp", () => {
    expect(scrabbleScorer("b")).toEqual(3);
    expect(scrabbleScorer("c")).toEqual(3);
    expect(scrabbleScorer("m")).toEqual(3);
    expect(scrabbleScorer("p")).toEqual(3);
  });

  test("it scores 4 for letters fhvwy ", () => {
    expect(scrabbleScorer("f")).toEqual(4);
    expect(scrabbleScorer("h")).toEqual(4);
    expect(scrabbleScorer("v")).toEqual(4);
    expect(scrabbleScorer("w")).toEqual(4);
    expect(scrabbleScorer("y")).toEqual(4);
  });

  test("it scores 5 for letter k ", () => {
    expect(scrabbleScorer("k")).toEqual(5);
  });

  test("it scores 8 for letters jx", () => {
    expect(scrabbleScorer("j")).toEqual(8);
    expect(scrabbleScorer("x")).toEqual(8);
  });

  test("it scores 10 for letters qz ", () => {
    expect(scrabbleScorer("q")).toEqual(10);
    expect(scrabbleScorer("z")).toEqual(10);
  });

  test("it scores 3 for the word 'be' ", () => {
    expect(scrabbleScorer("be")).toEqual(4);
  });
});
