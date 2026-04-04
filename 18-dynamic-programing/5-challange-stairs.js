// Write a function called stairs which accepts n number of
// stairs. Imagine that a person is standing at the bottom of
// the stairs and wants to reach the top and the person can
// climb either 1 stair or 2 stairs at a time. Your function
// should return the number of ways the person can reach
// the top by only climbing 1 or 2 stairs at a time.

// Stairs(1).  Stairs(2). Stairs(3).      Stairs(4).  Stairs(5)
// 1
//             1,1
//             2
//                         1,1,1
//                         1,2
//                         2,1
//                                         1,1,1,1
//                                         2,1,1
//                                         1,2,1
//                                         1,1,2
//                                         2,2

//                                                   1,1,1,1,1
//                                                   2,1,1,1
//                                                   1,2,1,1
//                                                   1,1,2,1
//                                                   2,2,1
//                                                   1,1,1,2
//                                                   1,2,2
//                                                   2,1,2

// 1           2           3               5         8



// O(2^n)
// function stairs(n) {
//   if (n <= 0) return 0;
//   if (n <= 2) return n;
//   return stairs(n - 1) + stairs(n - 2);
// }

// // O(n)
// function stairs(n, memo = []) {
//   if (n <= 0) return 0;
//   if (n === 1) return n;
//   if (n <= 2) return n;
//   if (memo[n] > 0) return memo[n];
//   memo[n] = stairs(n - 1, memo) + stairs(n - 2, memo);
//   return stairs(n - 1) + stairs(n - 2);
// }

// stor[0] prev amount of options
// stor[1] current amount of options
// function stairs(n) {
//   if (n < 3) return n;
//   let store = [1, 1];
//   for (let i = 2; i <= n; i++) {
//     let total = store[1] + store[0];
//     store[0] = store[1];
//     store[1] = total;
//   }
//   return store[1];
// }

// console.log(stairs(5));



// My solutions:
// =================

// O(2^n)
function stairs(n) {
  if (stairs >= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  return stairs(n - 1) + stairs(n - 2);
}

// O(n)
const memo = [];
function stairs(n) {
  if (stairs <= 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;
  if (memo[n] > 0) return memo[n];
  const result = stairs(n - 1, memo) + stairs(n - 2, memo);
  memo[n] = result;
  return result;
}

// O(n)
function stairs(n) {
  const memo = [0, 1, 2];
  for (let i = 3; i <= n; i++) {
    memo[i] = memo[i-1] + memo[i - 2];
  }
  return memo[memo.length - 1];
}

function stairs(n) {
  let prevPrev = 1;
  let prev = 2;
  for (let i = 3; i <= n; i++) {
    const sum = prev + prevPrev;
    prevPrev = prev;
    prev = sum;
  }
  return prev;
}
console.log(stairs(5));