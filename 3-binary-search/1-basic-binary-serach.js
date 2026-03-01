// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1;
//   let middle = Math.floor((end + start) / 2);

//   while (arr[middle] !== elem && start <= end) {
//     if (elem < arr[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((end + start) / 2);
//   }

//   if (arr[middle] === elem) return middle;
//   return -1;
// }

function binarySearch(arr, elem) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((end + start) / 2);
  while (arr[middle] !== elem && start <= end) {
    if (elem > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((end + start) / 2);
  }
  return arr[middle] === elem ? middle : -1;
}

// function binarySearch(arr, elem) {
//   let start = 0;
//   let end = arr.length - 1; // Use last index

//   while (start <= end) { // Safety check to prevent infinite loops
//     let middle = Math.floor((start + end) / 2);

//     if (arr[middle] === elem) {
//       return middle; // Return the index, not the value
//     }

//     if (elem > arr[middle]) {
//       start = middle + 1; // Skip the middle we just checked
//     } else {
//       end = middle - 1; // Skip the middle we just checked
//     }
//   }

//   return -1; // Element not found
// }

// console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30, 32], 15));
console.log(binarySearch([2, 5, 6, 9, 13, 15, 28, 30, 32], 150));
