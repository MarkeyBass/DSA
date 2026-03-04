function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  const pivot = arr[start];
  let swapIdx = start;

  // console.log(arr);
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

// pivot([4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = pivot(arr, left, right);
    // left
    quickSort(arr, left, pivotIndex - 1);
    // right                  
    quickSort(arr, pivotIndex + 1, right);
  }

  // console.log(arr);
  return arr;
}

console.log(quickSort([4, 9, 2, 1, 5, 7, 6, 3]));
console.log(quickSort([100, -3,2, 4, 9, 2, 1, 5, 7, 6, 3]));
