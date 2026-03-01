/**  Frequency Counter / Multiple Pointer - findPair
* Given an unsorted array and a number n, find if there exists a pair of elements in the array whose difference is n. This function should return true if the pair exists or false if it does not.

* Part 1 - solve this with the following requirements:

* Time Complexity Requirement - O(n)

* Space Complexity Requirement - O(n)
*/

function findPair(arr, n) {
  const s = new Set()

  for(let el of arr) {
    if(s.has(el + n) || s.has(el - n) ) return true
    s.add(el)
  }

  return false;
}

/**
 * 
 *  Part 2 - solve this with the following requirements:
 * Time Complexity Requirement - O(n log n)
 * Space Complexity Requirement - O(1)
*/ 



// function findPair(arr, n) {
//   arr.sort((a, b) => a - b);

//   let left = 0;
//   let right = 1;

//   while (right < arr.length && left < arr.length) {
//     const diff = arr[right] - arr[left];
  
//     if (left !== right && Math.abs(diff) === Math.abs(n)) {
//       return true;
//     } else if (diff < n) {
//       right++;
//     } else {
//       left++;
//     }
//   }

//   return false;
// }
//                   [1, 2, 4, 4, 6, 10]
console.log(1, findPair([6, 1, 4, 10, 2, 4], 2)); // true
console.log(2, findPair([8, 6, 2, 4, 1, 0, 2, 5, 13], 1)); // true
console.log(3, findPair([4, -2, 3, 10], -6)); // true
console.log(4, findPair([6, 1, 4, 10, 2, 4], 22)); // false
console.log(5, findPair([], 0)); // false
console.log(6, findPair([5, 5], 0)); // true
console.log(7, findPair([-4, 4], -8)); // true
console.log(8, findPair([-4, 4], 8)); // true
console.log(9, findPair([1, 3, 4, 6], -2)); // true
console.log(10, findPair([0, 1, 3, 4, 6], -2)); // true
console.log(11, findPair([1, 2, 3], 0)); // false
console.log(12, findPair([1, 2, 3, -56, -3], 0)); // false
console.log(13, findPair([1, 2, 3, -56, -3], 5)); // false

console.log("End");
