// Given the root of a binary tree, return the postorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [3,2,1]
// Explanation:
//  1
//   \
//    2
//   /
//  3
// Postorder: 3, 2, 1

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,6,7,5,2,9,8,3,1]
// Explanation:
//             1
//            /  \
//           2     3
//          / \     \
//         4   5     8
//            / \   /
//           6  7  9
// (Level-order array above: nulls mark missing children; 3 has no left child, 8 has left 9 only.)

// Example 3:

// Input: root = []

// Output: []

// Example 4:

// Input: root = [1]

// Output: [1]

// Constraints:

// The number of nodes in the tree is in the range [0, 100].
// -100 <= Node.val <= 100

// Follow up: Recursive solution is trivial, could you do it iteratively?

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
  const results = [];

  // ---------------- Recursive Solution ----------------
  // function traverse(node) {
  //   if (!node) return;
  //   traverse(node.left);
  //   traverse(node.right);
  //   results.push(node.val);
  // }
  // traverse(root);
  // return results;

  // ---------------- Iterative Solution ----------------
  // Postorder = left, right, root. Same as reverse of (root, right, left).
  // One stack: pop a node, record value, push left then right (so right is
  // processed next from stack). Reverse the collected order at the end.
  if (!root) return results;

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    results.push(node.val);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  results.reverse();
  return results;
};

// Call Stack
// ============

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [ 4, 6, 7, 5, 2, 9, 8, 3, 1]

//             1
//            /  \
//           2     3
//          / \      \
//         4   5      8
//            / \    /
//           6   7  9



const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);
const n6 = new TreeNode(6);
const n7 = new TreeNode(7);
const n8 = new TreeNode(8);
const n9 = new TreeNode(9);

n1.left = n2;
n1.right = n3;
n2.left = n4;
n2.right = n5;
n3.right = n8;
n5.left = n6;
n5.right = n7;
n8.left = n9;

// console.dir(n1, { depth: null });

console.log(postorderTraversal(n1));
