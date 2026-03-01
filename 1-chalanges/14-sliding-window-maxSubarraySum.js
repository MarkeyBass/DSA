/**
 * 
 * 
 * Sliding Window - maxSubarraySum
 * Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

 * Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

 * Constraints:

 * Time Complexity - O(N)

 * Space Complexity - O(1)

 */

console.log(maxSubarraySum([100, 200, 300, 400], 2)); // 700
console.log(maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4)); // 39
console.log(maxSubarraySum([-3, 4, 0, -2, 6, -1], 2)); // 5
console.log(maxSubarraySum([3, -2, 7, -4, 1, -1, 4, -2, 1], 2)); // 5
console.log(maxSubarraySum([2, 3], 3)); // null

function maxSubarraySum(arr, num) {
  if (num > arr.length - 1) return null;

  let left = 0;
  let right = num - 1;
  let sum = 0;

  // get first sub array
  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }

  // console.log(sum);
  let tempSum = sum;

  // check all sub arrays and compare them to the original
  while (right < arr.length) {
    ++left;
    ++right;

    tempSum = tempSum - arr[left - 1] + arr[right];
    if (tempSum > sum) sum = tempSum;
    // console.log(sum);
  }
  return sum;
}

// function maxSubarraySum(arr, num) {
//   if (arr.length < num) return null;

//   let maxSum = 0;

//   for (let i = 0; i < num; i++) {
//     maxSum += arr[i];
//   }

//   let tempSum = maxSum;

//   for (let i = 1; i < arr.length - num + 1; i++) {
//     tempSum = tempSum - arr[i - 1] + arr[i + num - 1];

//     if (tempSum > maxSum) maxSum = tempSum;
//   }

//   return maxSum;
// }
