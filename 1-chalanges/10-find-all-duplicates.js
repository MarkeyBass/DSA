// Frequency Counter
// findAllDuplicatesFrequency Counter - findAllDuplicates
// Given an array of positive integers, some elements appear twice and others appear once. Find all the elements that appear twice in this array. Note that you can return the elements in any order.

function findAllDuplicates(arr) {
  // add whatever parameters you deem necessary - good luck!
  const accObj = {};
  const duplicates = []
  for(let num of arr) {
    accObj[num] = (accObj[num] || 0) + 1
    if(accObj[num] === 2) duplicates.push(num)
  }
  console.log(duplicates);
  return duplicates;
}

findAllDuplicates([4, 3, 2, 7, 8, 2, 3, 1]); // array with 2 and 3
findAllDuplicates([4, 3, 2, 1, 0]); // []
findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3]); // array with 3, 2, and 1

// Time Complexity - O(n)
