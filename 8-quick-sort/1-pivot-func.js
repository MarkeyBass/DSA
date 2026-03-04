// this function is used to find the pivot index of the array
// It takes the start index (Which will be the pivot value) and puts all the values less than the pivot to the left of the pivot and all the values greater than the pivot to the right of the pivot
function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  const pivot = arr[start];
  let swapIdx = start;

  console.log(arr)
  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
      console.log(arr)
    }
  }
  swap(arr, start, swapIdx )

  console.log(arr);
  console.log(swapIdx);
  return swapIdx;
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
