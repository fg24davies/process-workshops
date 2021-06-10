function scrabbleScorer(word) {
  let sum = 0;
  let letters = word.split("");

  for (let i = 0; i < letters.length; i++) {
    console.log("sum", sum);
    console.log(letters[i]);
    if (
      ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"].includes(letters[i])
    ) {
      sum += 1;
    } else if (["d", "g"].includes(letters[i])) {
      sum += 2;
    } else if (["b", "c", "m", "p"].includes(letters[i])) {
      sum += 3;
    } else if (["f", "h", "v", "y", "w"].includes(letters[i])) {
      sum += 4;
    } else if (["k"].includes(letters[i])) {
      sum += 5;
    } else if (["j", "x"].includes(letters[i])) {
      sum += 8;
    } else if (["q", "z"].includes(letters[i])) {
      sum += 10;
    }
  }
  return sum;
}

module.exports = scrabbleScorer;

// if (['a', 'e', 'i', 'o', 'u', 'l', 'n', 'r', 's', 't' ].includes(word)) {
//   return 1;
// }
