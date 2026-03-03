// takes two sorted arrays and merges them as single sorted array
function merge(arr1, arr2) {
  const results = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }

  // Can implement with while loops
  for (; i < arr1.length; i++) {
    results.push(arr1[i]);
  }

  for (; j < arr2.length; j++) {
    results.push(arr2[j]);
  }

  // console.log(results);
  return results;
}


function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73]));
// console.log(mergeSort([10, 24, 76, 73, 1, 9]))
// mergeSort([10, 24, 76, 73, 1, 9]);
