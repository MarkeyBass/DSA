// Sliding Window - minSubArrayLen
// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

console.log("1)", minSubArrayLen([2, 3, 1, 2, 4, 3], 7)); // 2 -> because [4,3] is the smallest subarray
// console.log("2)", minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 62)); // 1 -> because [62] is greater than 52
// console.log("3)", minSubArrayLen([2, 1, 6, 5, 4], 9)); // 2 -> because [5,4] is the smallest subarray
// console.log("4)", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)); // 3
// console.log("5)", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)); // 5
// console.log("6)", minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
// console.log("7)", minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 95)); // 0
// console.log("8)", minSubArrayLen([1025, 4, 16, 22, 5, 7, 8, 9, 10], 1025)); // 1
// console.log("9)", minSubArrayLen([1, 2, 3], 6)); // 3

// console.log("10)", minSubArrayLen([2], 2)); // 1 -> because [0] === 2
// console.log("11)", minSubArrayLen([2, 1], 3)); // 2
// Time Complexity - O(n)

// Space Complexity - O(1)

// function minSubArrayLen(arr, num) {
//   let left = 0;
//   let right = 0; // window is [left, right), right is exclusive
//   let sum = 0;
//   let minLen = Infinity;

//   // // grow to first valid window - and get the initial sub array
//   while (sum < num && right < arr.length) {
//     console.log(sum + "-" + minLen)
//     sum += arr[right];
//     ++right;
//     if (sum >= num) minLen = right - left;
//   }

//   // // Edge cases
//   if (sum >= num && (minLen === 1 || minLen === arr.length)) return minLen;

//   while (right < arr.length) {
//     console.log(sum + "-" + minLen)
//     if (sum >= num && left < right) {
//       sum = sum - arr[left];
//       left++;
//     } else if (sum < num ) {
//       right++;
//       sum = sum + arr[right];
//     }

//     if (sum >= num) minLen = Math.min(minLen, right - left);
//   }

//   // Edge case - when sum of array is less then num
//   if (sum < num) minLen = 0;

//   return minLen === Infinity ? 0 : minLen;
// }

// function minSubArrayLen(nums, sum) {
//   let total = 0;
//   let start = 0;
//   let end = 0;
//   let minLen = Infinity;

//   while (start < nums.length) {
//     // if current window doesn't add up to the given sum then
// 		// move the window to right
//     if(total < sum && end < nums.length){
//       total += nums[end];
// 			end++;
//     }
//     // if current window adds up to at least the sum given then
// 		// we can shrink the window
//     else if(total >= sum){
//       minLen = Math.min(minLen, end-start);
// 			total -= nums[start];
// 			start++;
//     }
//     // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
//     else {
//       break;
//     }
//   }

//   return minLen === Infinity ? 0 : minLen;
// }


// function minSubArrayLen(arr, target) {
//   let minLen = Infinity;
//   let sum = 0;
//   let left = 0;

//   for (let right = 0; right < arr.length; right++) {
//     sum += arr[right];
//     while (sum >= target) {
//       minLen = Math.min(minLen, right - left + 1); // right is inclusive here
//       sum -= arr[left];
//       left++;
//     }
//   }
//   return Number.isFinite(minLen) ? minLen : 0;
// }


function minSubArrayLen(arr, target) {
  let left = 0, right = 0, sum = 0, minLen = Infinity;

  while (right < arr.length || sum >= target) {
    if (sum < target && right < arr.length) {
      sum += arr[right];   // expand right
      right++;
    } else if (sum >= target) {
      minLen = Math.min(minLen, right - left); // right is exclusive
      sum -= arr[left];    // shrink left
      left++;
    } else {
      break;
    }
  }
  return Number.isFinite(minLen) ? minLen : 0;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2