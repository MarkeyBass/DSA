// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.

// Example 1:

// Input: matrix = [[1,1,1],
//                  [1,0,1],
//                  [1,1,1]]

// Output: [[1,0,1],
//          [0,0,0],
//          [1,0,1]]

// Example 2:
// Input: matrix = [[0,1,2,0],
//                  [3,4,5,2],
//                  [1,3,1,5]]

// Output: [[0,0,0,0],
//          [0,4,5,0],
//          [0,3,1,0]]

// Constraints:

// m == matrix.length
// n == matrix[0].length
// 1 <= m, n <= 200
// -231 <= matrix[i][j] <= 231 - 1

// Follow up:

// A straightforward solution using O(mn) space is probably a bad idea.
// A simple improvement uses O(m + n) space, but still not the best solution.
// Could you devise a constant space solution?

/**
 * Time: O(mn) to collect zeros + O(k(m+n)) to apply (k = number of zeros).
 * Worst case k = Θ(mn) → O(mn(m+n)). Space: O(k).
 *
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {

  console.log(matrix)
  const locations = [];

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        locations.push([i, j]);
      }
    }
  }
  //.      [i, j]
  for (let loc of locations) {
    matrix[loc[0]] = new Array(matrix[loc[0]].length).fill(0);

    for (let i = 0; i < matrix.length; i++) {
      matrix[i][loc[1]] = 0;
    }
  }

  console.log(locations);
  console.log(matrix)
};

/**
 * O(mn) time, O(1) extra space (use row 0 and column 0 as markers; two
 * booleans record whether those lines themselves must be zeroed).
 * @param {number[][]} matrix
 */
function setZeroesConstantSpace(matrix) {
  const y = matrix.length;
  const x = matrix[0].length;

  // check if first row has any zeros
  let firstRowZero = false;
  for (let j = 0; j < x; j++) {
    if (matrix[0][j] === 0) {
      firstRowZero = true;
      break;
    }
  }

  // check if first column has any zeros
  let firstColZero = false;
  for (let i = 0; i < y; i++) {
    if (matrix[i][0] === 0) {
      firstColZero = true;
      break;
    }
  }

  // check if any other row has any zeros
  for (let i = 1; i < y; i++) {
    for (let j = 1; j < x; j++) {
      if (matrix[i][j] === 0) {
        // set the first element of the row to 0
        matrix[i][0] = 0;
        // set the first element of the column to 0
        matrix[0][j] = 0;
      }
    }
  }

  // check if any other column has any zeros
  for (let i = 1; i < y; i++) {
    // check if the first element of the row is 0
    if (matrix[i][0] === 0) {
      // set the row to 0
      for (let j = 0; j < x; j++) matrix[i][j] = 0;
    }
  }

  // check if any other column has any zeros
  for (let j = 1; j < x; j++) {
    // check if the first element of the column is 0
    if (matrix[0][j] === 0) {
      // set the column to 0
      for (let i = 0; i < y; i++) matrix[i][j] = 0;
    }
  }

  // check if first row has any zeros
  if (firstRowZero) {
    // set the first row to 0
    for (let j = 0; j < x; j++) matrix[0][j] = 0;
  }
  // check if first column has any zeros
  if (firstColZero) {
    // set the first column to 0
    for (let i = 0; i < y; i++) matrix[i][0] = 0;
  }
}

function cloneMatrix(mat) {
  return mat.map((row) => row.slice());
}

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);

const ex1 = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];
const ex2 = [
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
];
const c1 = cloneMatrix(ex1);
setZeroesConstantSpace(c1);
console.log("constant space ex1", c1);
const c2 = cloneMatrix(ex2);
setZeroesConstantSpace(c2);
console.log("constant space ex2", c2);
