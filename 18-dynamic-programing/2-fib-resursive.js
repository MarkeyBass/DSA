// function fib(n) {
//   if (n <= 2) return 1;
//   return fib(n - 1) + fib(n - 2);
// }

// console.log(fib(5));



// function fib(num) {
//   const arr = [1, 1];
//   for (let i = 2; i < num; i++) {
//     arr[i] = arr[i - 1] + arr[i - 2];
//   }
//   // console.log(arr)
//   return arr[arr.length - 1];
// }

function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

//                 fib(5 - 1)             +                       fib(5 - 2) 
//     fib(4-1)      +      fib(4-2) = 1;       +             fib(3-1)=1 + fib(3-2)=1 
// fib(3-1)=1 + fib(3-2)=1;                              
    



console.log(fib(5));
