## Process Workshop 08 Jun 21

Requirements
Given a word, compute the scrabble score for that word.

Letter Values
You'll need these:

Letter Value
A, E, I, O, U, L, N, R, S, T = 1
D, G = 2
B, C, M, P = 3
F, H, V, W, Y =4
K = 5
J, X = 8
Q, Z = 10

Examples "cabbage" should be scored as worth 14 points:

3 points for C
1 point for A, twice
3 points for B, twice
2 points for G
1 point for E
And to total:

3 + 2x1 + 2x3 + 2 + 1

= 3 + 2 + 6 + 3

= 14

| Input     | Output |
| --------- | ------ |
| 'a'       | 1      |
| 'd'       | 2      |
| 'be'      | 4      |
| ''        | 0      |
| " \t\n"   | 0      |
| nil       | 0      |
| 'cabbage' | 14     |

- potentially use an object to hold the letters and scores
- { 1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T' ], ... }

- given a letter, want to see if that letter exists a value in the object and return the key

- loop through keys, return key of the value

## Feedback

To work on:

- Missed committing after one passing test, remember RED GREEN COMMIT REFACTOR GREEN COMMIT

To continue:

- Verbalising my problem solving
- Using psuedo code
- Starting with the simplest test
