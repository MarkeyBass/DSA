// function bubbleNaive(arr) {
//   let swapped = false;
//   while (!swapped) {
//     let swapCounter = 0;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         swapCounter++;
//       }
//     }
//     if (swapCounter === 0) return arr;
//   }
// }

// console.log(bubbleNaive([5, 3, 4, 1, 2]));

// function bubbleSortColt(arr) {
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       console.log("proccess", arr, arr[j], arr[j + 1]);
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//     console.log("ONE PASS COMPLETE!");
//   }
//   return arr;
// }

// console.log(bubbleSortColt([37, 45, 29, 8, 12, 88, -3]));

// =============
// BEST VERSION:
// =============
function bubbleSort(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      // console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
    // console.log("ONE PASS COMPLETE!");
  }
  return arr;
}

// console.log(bubbleSort([37, 45, 29, 8, 12]));
console.log(bubbleSort([8, 1, 2, 3, 4, 5]));
