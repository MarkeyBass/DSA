const arr = [24, 65678, 39, 22, 52];

function findOdd(arr) {
  if (arr[0] % 2 !== 0) return arr[0];
  if (arr.length === 1) return "not found";
  return findOdd(arr.slice(1));
}

console.log(findOdd(arr));
