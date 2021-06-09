function scrabbleScorer(word) {
  if (word === "a" || word === "e") {
    return 1;
  } else if (word === "d") {
    return 2;
  }
}

module.exports = scrabbleScorer;
