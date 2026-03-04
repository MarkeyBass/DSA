// const arr1 = [1556, 4, 3556, 593, 408, 4386, 902, 7, 8157, 86, 9637, 29];

// function getDigit(num, digit) {
//   const strRepresentation = num.toString();
//   return strRepresentation[strRepresentation.length - 1 - digit] * 1;
// }

// console.log(getDigit(12345, 0));
// console.log(getDigit(12345, 1));

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

console.log(getDigit(4321, 2));

function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num)) + 1);
}

console.log(digitCount(4321));

function mostDigits(nums) {
  let maxDigits = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigits = Math.max(maxDigits, digitCount(nums[i]));
  }
  return maxDigits;
}

console.log(mostDigits([543, 3, 34, 23456, 90]));
