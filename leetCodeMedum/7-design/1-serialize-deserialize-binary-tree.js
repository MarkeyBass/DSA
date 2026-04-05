// Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

// Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

// Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

// Example 1:

// Input: root = [1,2,3,null,null,4,5]
// Output: [1,2,3,null,null,4,5]
// Example 2:

// Input: root = []
// Output: []

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
// var serialize = function (root) {
//   if (!root) return "";
//   const serializedArr = [];
//   (function inner(node) {
//     let val;
//     if (node === null) {
//       val = null;
//       serializedArr.push(null);
//       return null;
//     } else {
//       val = node.val;
//       serializedArr.push(node.val);
//     }

//     inner(node.left);
//     inner(node.right);
//   })(root);

//   console.log(JSON.stringify(serializedArr));
//   return JSON.stringify(serializedArr);
// };

var serialize = function (root) {
  if (!root) return JSON.stringify([]);
  const queue = [root];
  const results = [];
  while (queue.length) {
    const node = queue.shift();
    if (node) {
      results.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    } else {
      results.push(null);
    }
  }
  const returnVal = JSON.stringify(results);
  console.log(returnVal);
  return returnVal;
};


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  if (!data || !data.length) return null;
  const arr = JSON.parse(data);
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length && i < arr.length) {
    const node = queue.shift();
    // Left child (always consume index i when present)
    if (i < arr.length) {
      if (arr[i] !== null) {
        node.left = new TreeNode(arr[i]);
        queue.push(node.left);
      }
      i++;
    }
    // Right child
    if (i < arr.length) {
      if (arr[i] !== null) {
        node.right = new TreeNode(arr[i]);
        queue.push(node.right);
      }
      i++;
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

// [1,2,3,null,null,4,5]

const n1 = new TreeNode(1);
const n2 = new TreeNode(2);
const n3 = new TreeNode(3);
const n4 = new TreeNode(4);
const n5 = new TreeNode(5);

n1.left = n2;
n1.right = n3;
n3.left = n4;
n3.right = n5;

const serializedData = serialize(n1);
console.log("====================================");
const rebuilt = deserialize(serializedData);
console.log(serialize(rebuilt) === serializedData);
