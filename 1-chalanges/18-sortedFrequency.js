// Divide and Conquer - sortedFrequency
// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 1)); // 2
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 3)); // 1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 4)); // -1
console.log(sortedFrequency([1, 1, 2, 2, 2, 2, 3], 2)); // 4

// Time Complexity - O(log n)
function sortedFrequency(arr, num) {
  const first = findFirst(arr, num);
  if (first === -1) return -1;

  const last = findLast(arr, num);
  return last - first + 1;
}

function findFirst(arr, num) {
  let left = 0, right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      result = mid;
      right = mid - 1;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function findLast(arr, num) {
  let left = 0, right = arr.length - 1;
  let result = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === num) {
      result = mid;
      left = mid + 1;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}


// // Naiv approach
// // =============

// function sortedFrequency(arr, num) {
//   let counter = 0;
//   arr.forEach(el => {
//     if(el === num) {
//       counter++
//     }
//   })
//   return counter || -1
// }
