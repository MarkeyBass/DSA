// For sorted

function checkSumSorted(arr, target = 8) {
  let left = 0;
  let right = arr.length - 1;

  let sum;
  while (arr[left] + arr[right] !== target && right > left + 1) {
    sum = arr[left] + arr[right];
    if (sum < target) left++;
    if (sum > target) right--;
  }

  if (arr[left] + arr[right] === 8) return [left, right];
  else return null;
}

// console.log(checkSumSorted([1, 2, 3, 9],8));
// console.log(checkSumSorted([1, 2, 4, 4],8));
// console.log(checkSumSorted([1, 2, 4, 5, 6],8));
// console.log(checkSumSorted([1, 2, 4, 8, 9], 8));

// For non sorted
function checkSumNonSorted(arr, target) {
  // // Main logic with Set
  const set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (set.has(target - arr[i])) return true;
    set.add(arr[i]);
  }
  return false;
}

console.log(checkSumNonSorted([1, 2, 3, 9], 8)); // false
console.log(checkSumNonSorted([1, 2, 4, 4], 8)); // true
console.log(checkSumNonSorted([1, 2, 4, 5, 6], 8)); // true
console.log(checkSumNonSorted([1, 2, 4, 8, 9], 8)); // false
console.log(checkSumNonSorted([1, 2, 4, 5, 9], 8)); // false
