function scrabbleScorer(word) {
  if (["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].includes(word)) {
    return 1;
  } else if (["d", "g"].includes(word)) {
    return 2;
  } else if (["b", "c", "m", "p"].includes(word)) {
    return 3;
  } else if (["f", "h", "v", "y", "w"].includes(word)) {
    return 4;
  }
}

module.exports = scrabbleScorer;

// if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' ].includes(word)) {
//   return 1;
// }
