// flatten
// Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]



function flatten(arr) {
  newArr = [];

  arr.forEach((el, i) => {
    if (!Array.isArray(el)) {
      newArr.push(el);
    } else {
      newArr = [...newArr, ...flatten(arr[i])];
    }
  });

  return newArr;
}

// function flatten(arr) {
//   // Base case: empty array
//   if (arr.length === 0) return [];

//   // If first element is an array, flatten it and concat with rest
//   if (Array.isArray(arr[0])) {
//     return flatten(arr[0]).concat(flatten(arr.slice(1)));
//   }

//   // If first element is not an array, add it and flatten rest
//   return [arr[0]].concat(flatten(arr.slice(1)));
// }

// function flatten(arr) {
//   return arr.reduce((acc, el) => {
//     if (!Array.isArray(el)) {
//       return [...acc, el];
//     } else {
//       return [...acc, ...flatten(el)];
//     }
//   }, []);
// }
