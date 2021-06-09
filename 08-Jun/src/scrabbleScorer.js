function scrabbleScorer(word) {
  if (["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].includes(word)) {
    return 1;
  } else if (word === "d") {
    return 2;
  }
}

module.exports = scrabbleScorer;

// if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' ].includes(word)) {
//   return 1;
// }
