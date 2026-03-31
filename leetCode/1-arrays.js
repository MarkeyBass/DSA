// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function (nums) {
  //   const results = []
  //   for(let i = 0; i < nums.length; i+=3) {
  //       for(let j = i+1; j < nums.length; j++) {
  //           for(let k = j+1; k < nums.length; k++) {
  //               if(nums[i] + nums[j] + nums[k] === 0) {
  //                   results.push([nums[i], nums[j], nums[k]])
  //               }
  //           }
  //       }
  //   }
  //   return results;

  //   { '0': 1, '1': 1, '2': 1, '-1': 2, '-4': 1 }

  const results = [];
  const obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] === undefined) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]] += 1;
    }
  }

  const entries = Object.entries(obj);
  for (let i = 0; i < entries.length; i++) {
    const key = entries[i][0] * 1;
    const value = entries[i][1] * 1;
    // case duplicate
    if (value > 1) {
      let x = key === 0 ? 0 : -1 * (2 * key);
      if (obj[x]) results.push([key, key, x]);
    }
  }

  const keys = Object.keys(obj);
  const existingResults = new Set();
  // case non duplicate values
  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      const keyI = Number(keys[i]);
      const keyJ = Number(keys[j]);
      let x = -1 * (keyI + keyJ);
      if (obj[x] && x !== keyI && x !== keyJ && keyI !== keyJ) {
        const arrToAdd = [keyI, keyJ, x].sort((a, b) => a - b);
        const stringArr = arrToAdd.toString();

        if (!existingResults.has(stringArr)) {
          results.push(arrToAdd);
          existingResults.add(stringArr);
        }
      }
    }
  }

  // edge cases
  if (results.length === 0) return [];
  
  return results;
};

const results = threeSum([-1, 0, 1, 2, -1, -4]);
console.log("results", results);
const results2 = threeSum([-1, 0, 1, 2, -1, -4, 0, 0]);
console.log("results2", results2);
const results3 = threeSum([0, 0, 0]);
console.log("results3", results3);
