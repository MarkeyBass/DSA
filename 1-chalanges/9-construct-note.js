// Frequency Counter - constructNote
// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Bonus Constraints:

// If M is the length of message and N is the length of letters:

// Time Complexity: O(M+N)

// Space Complexity: O(N)

// Examples:

function constructNote(message, letters){
  // add whatever parameters you deem necessary - good luck!
  
  const obj = {};
  
  for(let ch of letters) {
      obj[ch] = (obj[ch] || 0) + 1;
      // if(obj[ch]) {
      //   obj[ch]++
      // } else {
      //   obj[ch] = 1;    
      // }
  }
  
  for(let ch of message) {
      if(!obj[ch]) return false
      obj[ch] --
  }
  return true;
}
constructNote('aa', 'abc') // false
constructNote('abc', 'dcba') // true
constructNote('aabbcc', 'bcabcaddff') // true