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

// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function (digits) {
//   const NUMBERS_OBJ = {
//     2: "abc",
//     3: "def",
//     4: "ghi",
//     5: "jkl",
//     6: "mno",
//     7: "pqrs",
//     8: "tuv",
//     9: "wxyz",
//   };

//   if (typeof digits !== "string") {
//     digits = String(digits);
//   }

//   if (digits === "") return [];

//   const combinations = [];

//   function inner(currString, i) {
//     if (i === digits.length) {
//       combinations.push(currString);
//       return;
//     }

//     const letters = NUMBERS_OBJ[digits[i]];

//     for (let j = 0; j < letters.length; j++) {
//       inner(currString + letters[j], i + 1);
//     }
//   }
//   inner("", 0);

//   return combinations;
// };

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
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

  if (typeof digits !== "string") {
    digits = String(digits);
  }

  if (digits === "") return [];

  const queue = [""]

  let counter = 0;
  for(let digit of digits) {
    const letters = NUMBERS_OBJ[digit]
    const size = queue.length
    for(let i = 0; i < size; i++) {
      let current = queue.shift();
      for(let ch of letters) {
        queue.push(current + ch)
      }
    }
  }
  console.log(queue)


  return queue;
};
letterCombinations("234");

// letterCombinations("293"
// [""] -> ["a", "b", "c"] -> ["aw", "ax", "ay", "az", ...] -> ["awd", "awe", awf", "axd"...]