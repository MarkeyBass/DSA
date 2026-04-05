// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:

// Input: a = 1, b = 2
// Output: 3
// Example 2:

// Input: a = 2, b = 3
// Output: 5
 

// Constraints:

// -1000 <= a, b <= 1000

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
  // XOR = sum without carry; (a & b) << 1 = carry. Repeat until no carry.
  // Bitwise ops use 32-bit signed integers in JS (fine for LeetCode's range).
  while (b !== 0) {
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};


console.log(getSum(1, 2))
console.log(getSum(2, 3))