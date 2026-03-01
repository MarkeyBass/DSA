// fib
// Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which starts with 1 and 1, and where every number thereafter is equal to the sum of the previous two numbers.

function fib(num) {
  const arr = [1, 1];
  for (let i = 2; i < num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  // console.log(arr)
  return arr[arr.length - 1];
}

// function fib(num) {
//   if (num <= 2) return 1;
//   return fib(num - 1) + fib(num - 2);
// }
console.log(fib(90));


// fib(6)
// = fib(5) + fib(4)

// fib(5)
// = fib(4) + fib(3)

// fib(4)
// = fib(3) + fib(2)

// fib(3) = fib(2) + fib(1) = 1 + 1 = 2
// fib(2) = 1
// fib(1) = 1


// fib(3) = 2
// fib(4) = fib(3) + fib(2) = 2 + 1 = 3
// fib(5) = fib(4) + fib(3) = 3 + 2 = 5
// fib(6) = fib(5) + fib(4) = 5 + 3 = 8

// ==========
// fib(7) = fib(6) + fib(5) = 8 + 5 = 13