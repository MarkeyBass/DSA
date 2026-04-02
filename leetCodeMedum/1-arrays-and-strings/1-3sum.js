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
    // const results = []
    // const existingResults = new Set();
    // for (let i = 0; i < nums.length; i++) {
    //     for(let j = i+1; j < nums.length; j++) {
    //         for(let k = j+1; k < nums.length; k++) {
    //             if(nums[i] + nums[j] + nums[k] === 0) {
    //                 const arrToAdd = [nums[i], nums[j], nums[k]].sort((a, b) => a - b);
    //                 const stringArr = arrToAdd.toString();
    //                 if (!existingResults.has(stringArr)) {
    //                     results.push(arrToAdd);
    //                     existingResults.add(stringArr);
    //                 }
    //             }
    //         }
    //     }
    // }
    // return results;

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
  // case duplicate values
  for (let i = 0; i < entries.length; i++) {
    const key = Number(entries[i][0]);
    const value = Number(entries[i][1]);
    if(value >=3 && key === 0) results.push([0, 0, 0]);
    if(value > 1 && key !==0) {
      const x = 0 - 2 * key
      if(obj[x]) results.push([key, key, x]);
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
  
  return results;
};

const results = threeSum([-1, 0, 1, 2, -1, -4]);
console.log("results", results);
const results2 = threeSum([-1, 0, 1, 2, -1, -4, 0, 0]);
console.log("results2", results2);
const results3 = threeSum([0, 0, 0]);
console.log("results3", results3);
const results4 = threeSum([-2,0,1,1,2]);
console.log("results4", results4);
const results5 = threeSum([]);
console.log("results5", results5);

// https://leetcode.com/explore/interview/card/top-interview-questions-medium/103/array-and-strings/776/

// Before starting the LeetCode challenges I was a bit stuck on the end of the Udemy course - didn't finish it yet so went on for the LeetCode challenges.

// First leetcode - took too long - I managed to do it with O(n^2) instead of the brut force O(n^3) which was good. I did not manage to take into account all the edge cases - I used AI for the final edge case fix (small but still used AI). Took me 2.5 - 3 hours instead of one hour