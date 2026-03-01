// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

function isSubsequence(sub, str) {
  if (sub.length > str.length || sub.length === 0) return false;

  let subI = 0;
  let strI = 0;

  while (strI < str.length) {
    if (str[strI] === sub[subI]) {
      subI++;
      if (subI === sub.length) return true;
    }
    strI++;

  }
  return false;
}

// function isSubsequence(sub, str) {
//   if (sub.length === 0) return true;

//   let subI = 0;
//   let strI = 0;

//   while (strI < str.length) {
//     if (str[strI] === sub[subI]) {
//       subI++;
//       if (subI === sub.length) return true;
//     }
//     strI++;
//   }
//   return false;
// }

// Examples:

console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false (order matters)
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)
