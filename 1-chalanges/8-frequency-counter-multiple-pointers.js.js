// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:

// Time - O(n)

// Space - O(n)

// Bonus:

// Time - O(n log n)

// Space - O(1)

// function areThereDuplicates(...args) {
//   const accObj = {};
//   for(let arg of args) {
//     if(!accObj[arg]) {
//       accObj[arg] = 1;
//     } else {
//       accObj[arg]++
//     }
//   }

//   console.log(accObj);

//   for(let key in accObj){
//     if(accObj[key] > 1) {
//       return true;
//     }
//   }
//   return false;
// }

// function areThereDuplicates(...args) {
//   const accObj = {};
//   for (let arg of args) {
//     if (!accObj[arg]) {
//       accObj[arg] = 1;
//     } else {
//       accObj[arg]++;
//       if (accObj[arg] > 1) return true;
//     }
//   }
//   return false;
// }

function areThereDuplicates(...args) {
  args.sort(); // In-place sort: O(n log n) time, O(1) space (ignoring call stack)
  // args.sort((a, b) => a - b);
  console.log(args);
  
  for (let i = 0; i < args.length - 1; i++) {
    if (args[i] === args[i + 1]) return true;
  }
  return false;
}

// Examples:

console.log(areThereDuplicates(1, 2, 3)); // false
console.log(areThereDuplicates(1, 2, 2)); // true
console.log(areThereDuplicates(1, 2, 12, 5, 12)); // true
console.log(areThereDuplicates("a", "b", "c", "a", "ab", "xy")); // true

// My old solution:

// function areThereDuplicates() {
//     let left;
//   let right;
//   const countObj = {};

//   for (let i = 0; i &lt;= Math.floor(arguments.length / 2); i++) {
//     left = arguments[i];
//     right = arguments[arguments.length - i];
//     if (
//       (left === right &amp;&amp; i !== Math.round(arguments.length / 2)) ||
//       countObj[left] ||
//       countObj[right]
//     ) {
//       return true;
//     } else {
//       countObj[left] = 1;
//       countObj[right] = 1;
//     }
//   }
//   return false;
// }
