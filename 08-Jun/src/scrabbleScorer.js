function scrabbleScorer(word) {
  if (word === "" || word === " \t\n" || word === null) {
    return 0;
  }

  let score = 0;
  let letters = word.split("");

  for (let i = 0; i < letters.length; i++) {
    if (
      ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].includes(letters[i])
    ) {
      score += 1;
    } else if (["d", "g"].includes(letters[i])) {
      score += 2;
    } else if (["b", "c", "m", "p"].includes(letters[i])) {
      score += 3;
    } else if (["f", "h", "v", "y", "w"].includes(letters[i])) {
      score += 4;
    } else if (["k"].includes(letters[i])) {
      score += 5;
    } else if (["j", "x"].includes(letters[i])) {
      score += 8;
    } else if (["q", "z"].includes(letters[i])) {
      score += 10;
    }
  }
  return score;
}

module.exports = scrabbleScorer;

// if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' ].includes(word)) {
//   return 1;
// }
