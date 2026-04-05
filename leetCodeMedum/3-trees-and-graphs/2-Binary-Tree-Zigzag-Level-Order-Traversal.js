// // Binary Tree Zigzag Level Order Traversal

// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values. (i.e., from left to right, then right to left for the next level and alternate between).

// Example 1:

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]
// Example 2:

// Input: root = [1]
// Output: [[1]]
// Example 3:

// Input: root = []
// Output: []

// Definition for a binary tree node.
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  const results = [];
  if (!root) return results;

  let counter = 0;
  const queue = [root];

  while (queue.length) {
    const levelSize = queue.length;
    const level = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    if (counter % 2 === 1) level.reverse();
    results.push(level);
    counter++;
  }

  return results;
};

// Input: root = [3,9,20,null,null,15,7]
// Output: [[3],[20,9],[15,7]]

const n9 = new TreeNode(9);
const n15 = new TreeNode(15);
const n7 = new TreeNode(7);
const n20 = new TreeNode(20, n15, n7);
const root = new TreeNode(3, n9, n20);

console.dir(root, { depth: null });

console.log(zigzagLevelOrder(root));
