// capitalizeWords
// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

function capitalizeWords(arr) {
  if(arr.length === 1) return [arr[0].toUpperCase()]
  return [arr[0].toUpperCase()].concat(capitalizeWords(arr.slice(1)));
}

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words))

// console.log("first".toUpperCase())