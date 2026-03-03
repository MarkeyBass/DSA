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

  console.log(results);
  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);
merge([1, 10, 99, 50], [2, 14, 99, 100, 6876, 8980]);
merge([], [1, 3]);
merge([100], [1, 3, 5]);
