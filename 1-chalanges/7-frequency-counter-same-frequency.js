// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

// Sample Input:

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

function sameFrequency(n1, n2) {
  const str1 = n1.toString();
  const str2 = n2.toString();

  if (str1.length !== str2.length) return false;

  const accObj = {};

  for (let ch of str1) {
    if (accObj[ch]) {
      accObj[ch]++;
    } else {
      accObj[ch] = 1;
    }
  }

  for (let ch of str2) {
    if (!accObj[ch]) return false;
    if (accObj[ch] > 0) accObj[ch]--;
  }
  return true;
}

// My old solution

// function sameFrequency(n1, n2){
//   n1 = n1.toString();
//   n2 = n2.toString();

//   if (n1.length != n2.length || n1.length === 0 || n2.length === 0)
//     return false;

//   let val_dict = {};

//   for (let i = 0; i < n1.length; i++) {
//     let el = n1[i]
//     if (!val_dict[el]) {
//       val_dict[el] = 1;
//     } else {
//       val_dict[el]++;
//     }
//   }

//   for (let i = 0; i < n2.length; i++) {
//     let el = n2[i]
//     if (!val_dict[el]) {
//       return false;
//     } else {
//       val_dict[el]--;
//       if (val_dict[el] === 0) delete val_dict[el];
//     }
//   }
//   return true;
// }
