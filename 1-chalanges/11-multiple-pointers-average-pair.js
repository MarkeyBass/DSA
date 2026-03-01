// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N);

// Space: O(1);

function averagePair(arr, target) {
  let leftIndex = 0;
  let point2 = arr.length - 1;
  while (leftIndex < point2) {
    const currAvg = (arr[leftIndex] + arr[point2]) / 2;
    if (currAvg === target) return true;
    if (currAvg < target) {
      leftIndex++;
    } else {
      point2--;
    }
  }
  return false;
}

// Sample Input:

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
