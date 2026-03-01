
function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function selection(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minValIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minValIndex]) {
        minValIndex = j;
      }
    }
    // console.log({
    //   arr,
    //   "arr[i]": arr[i],
    //   "arr[minValIndex]": arr[minValIndex],
    //   bool: arr[i] > arr[minValIndex],
    // });
    if (arr[i] > arr[minValIndex]) {
      swap(arr, i, minValIndex)
    }
  }
  return arr;
}

console.log(selection([5, 3, 4, 1, 2]));



// ES2015 VERSION - colt's version
function selectionSort(arr) {
  const swap = (arr, idx1, idx2) =>
    ([arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]);

  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }
    if (i !== lowest) swap(arr, i, lowest);
  }

  return arr;
}

selectionSort([0,2,34,22,10,19,17]);