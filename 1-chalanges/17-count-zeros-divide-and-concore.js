// Divide and Conquer - countZeroes
// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Naiv approach
// function countZeroes(arr) {
//   let counter = 0;
//   arr.forEach(element => {
//     if(element === 0) {counter++}
//   });
//   console.log(counter);

//   return counter;
// }


console.log(countZeroes([1, 1, 1, 1, 0, 0])); // 2
console.log(countZeroes([1, 0, 0, 0, 0])); // 4
console.log(countZeroes([0, 0, 0])); // 3
console.log(countZeroes([1, 1, 1, 1])); // 0
// Time Complexity - O(log n)

function countZeroes(arr) {
  let left = 0;
  let right = arr.length - 1;
  
  if (arr[left] === 0) return arr.length;
  if (arr[right] === 1) return 0;

  // find the change point from 1 to 0:
  while (left <= right) {
    let mid = Math.floor((right + left) / 2);
    
    if (arr[mid] === 0 && arr[mid - 1] === 1) {
      return arr.length - mid;
    }
    if (arr[mid] === 1) {
      left = mid + 1;
    } else if (arr[mid] === 0) {
      right = mid - 1;
    }
  }

  return 0;
}

// // With explanations
// // ======================
// function countZeroes(arr) {
//   // Edge cases
//   if (arr[0] === 0) return arr.length; // All zeros
//   if (arr[arr.length - 1] === 1) return 0; // No zeros

//   let left = 0;
//   let right = arr.length - 1;

//   // Find the first occurrence of 0 (transition point from 1 to 0)
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2);
    
//     // Check if this is the transition point
//     if (arr[mid] === 0 && arr[mid - 1] === 1) {
//       return arr.length - mid;
//     }
    
//     // If current element is 1, search right half
//     if (arr[mid] === 1) {
//       left = mid + 1;
//     } 
//     // If current element is 0, search left half
//     else {
//       right = mid - 1;
//     }
//   }

//   return 0;
// }

