function pivot(arr, start = 0, end = arr.length - 1) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  let pivot = start;

  for (let i = 0; i < arr.length; i++) {
    if (arr[pivot] > arr[i]) {
      pivot++;
      swap(arr, arr[pivot], arr[pivot + 1]);
    }
  }

  console.log(arr);
  console.log(pivot)
  return pivot
}

pivot([4, 8, 2, 1, 5, 7, 6, 3]);
