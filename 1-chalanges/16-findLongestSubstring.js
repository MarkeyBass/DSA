// Sliding Window - findLongestSubstring
// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// findLongestSubstring(""); // 0
// findLongestSubstring("rithmschool"); // 7
// findLongestSubstring("thisisawesome"); // 6
// findLongestSubstring("thecatinthehat"); // 7
// findLongestSubstring("bbbbbb"); // 1
// findLongestSubstring("longestsubstring"); // 8
// findLongestSubstring("thisishowwedoit"); // 6
// Time Complexity - O(n)

// function findLongestSubstring(str) {
//   let longest = 0;
//   let lastSeen = {}; // char -> last index
//   let start = 0;

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     // if char was seen AND is inside the current window
//     if (lastSeen[char] !== undefined && lastSeen[char] >= start) {
//       start = lastSeen[char] + 1;
//     }

//     longest = Math.max(longest, i - start + 1);
//     lastSeen[char] = i;
//   }
//   console.log(longest)
//   return longest;
// }

// // t h i s i s a w e s o  m  e
// // 0 1 2 3 4 5 6 7 8 9 10 11 12

findLongestSubstring("abcab")
function findLongestSubstring(str) {
  let longestLength = 0;
  const charLastPositions = {};
  let startIndex = 0;

  // window is fo debugging - should be removed
  // let window = ""

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charLastPositions[char] !== undefined && charLastPositions[char] >= startIndex) {
      startIndex = charLastPositions[char] + 1;
    }
    longestLength = Math.max(longestLength, i - startIndex + 1);
    charLastPositions[char] = i;

    // window is fo debugging - should be removed
    // window = str.slice(startIndex, i + 1)
    // console.log(window);
    
  }
  console.log(longestLength);
  return longestLength;
}
