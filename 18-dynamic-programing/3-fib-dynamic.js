// // MEMOIZATION

const objDone = {};

function fib(num) {
  if (num in objDone) return objDone[num];
  if (num <= 2) return 1;
  const result = fib(num - 1) + fib(num - 2);
  objDone[num] = result;
  return result;
}

console.log(fib(70));
console.log(objDone);


// function fib(n, memo = []) {
//   if (memo[n] !== undefined) return memo[n];
//   if (n <= 2) return 1;
//   var res = fib(n - 1, memo) + fib(n - 2, memo);
//   memo[n] = res;
//   return res;
// }

// console.log(fib(45));