// Letter Combinations of a Phone Number

// Solution
// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

// Example 1:

// Input: digits = "23"
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
// Example 2:

// Input: digits = "2"
// Output: ["a","b","c"]

// Constraints:

// 1 <= digits.length <= 4
// digits[i] is a digit in the range ['2', '9'].

// Letter mapped to numbers
// 2: "abc", 3: "def", 4: "ghi", 5: "jkl", 6: "mno", 7: "pqrs", 8: "tuv", 9: "wxyz"

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (typeof digits !== "string") {
    digits = String(digits);
  }

  const LETTERS_OBJ = {
    a: 2,
    b: 2,
    c: 2,
    d: 3,
    e: 3,
    f: 3,
    g: 4,
    h: 4,
    i: 4,
    j: 5,
    k: 5,
    l: 5,
    m: 6,
    n: 6,
    o: 6,
    p: 7,
    q: 7,
    r: 7,
    s: 7,
    t: 8,
    u: 8,
    v: 8,
    w: 9,
    x: 9,
    y: 9,
    z: 9,
  };
  const NUMBERS_OBJ = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  const combinations = [];

  function inner(digits) {

  }

  
  // for (let i = 0; i < digits.length; i++) {
  //   const innerCombination = [];
  //   for (let char of NUMBERS_OBJ[digits[i]]) {

  //     innerCombination.push(char);
  //   }
  //   combinations.push(innerCombination);
  // }

  return combinations;
};

console.log(letterCombinations(23))

