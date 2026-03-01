// isPalindrome
// Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome (reads the same forward and backward). Otherwise it returns false.

// // With helper function
// function isPalindrome(str) {
//   function helperReverse(innerStr) {
//     if (innerStr.length === 0) return "";
//     if (innerStr.length === 1) return innerStr;
//     return helperReverse(innerStr[innerStr.length - 1]) + helperReverse(innerStr.slice(0, -1));
//   }

//   const reverse = helperReverse(str);
//   return str === reverse;
// }

function isPalindrome(str) {
  if (str.length === 1 || str.length === 0) return true;
  return (str[0] === str[str.length -1]) && isPalindrome(str.slice(1, str.length - 1));
}

console.log(isPalindrome("abba")); // true
console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
