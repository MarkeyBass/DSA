function pivot(arr, startIdx = 0, endIdx = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivotIdx = startIdx;

  for (let i = 0; i < arr.length; i++) {
    if (arr[pivotIdx] > arr[i]) {
      pivotIdx++;
      swap(arr, arr[pivotIdx], arr[pivotIdx + 1]);
    }
  }

  console.log(arr);
  return arr;
}

pivot([2, 1, 0]);
