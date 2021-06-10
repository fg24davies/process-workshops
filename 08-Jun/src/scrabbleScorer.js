function scrabbleScorer(word) {
  if (["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].includes(word)) {
    return 1;
  } else if (["d", "g"].includes(word)) {
    return 2;
  }
}

module.exports = scrabbleScorer;

// if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' ].includes(word)) {
//   return 1;
// }
