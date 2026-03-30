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
  // Edge case: check if half of target exists twice inside the array
  if (target % 2 === 0) {
    let left = null;
    let right = null;
    const halfTarget = target / 2;
    for (let el of arr) {
      if (el === halfTarget) {
        if (left === null) left = halfTarget;
        else right = halfTarget;

        if (left + right === target) return true;
      }
    }

    // Main logic with Set
    const set = new Set(arr);
    for (let el of arr) {
      if (set.has(target - el)) {
        return true;
      }
    }

    return false;
  }
}

console.log(checkSumNonSorted([1, 2, 3, 9],8)); // false
console.log(checkSumNonSorted([1, 2, 4, 4],8)); // true 
console.log(checkSumNonSorted([1, 2, 4, 5, 6],8)); // true
console.log(checkSumNonSorted([1, 2, 4, 8, 9], 8)); // false
