const arr = [1, 3, 5, 7, 89, 104, 230, 233];

function findIndexOfNum(arr, num) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (arr[mid] === num) {
      return mid;
    } else if (arr[mid] < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
}

console.log(findIndexOfNum(arr, 233))