// Given the root of a binary tree, return the inorder traversal of its nodes' values.

// Example 1:
// Input: root = [1,null,2,3]
// Output: [1,3,2]
// Explanation:
//  1
//    \
//     2
//    /
//   3

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
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
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // // LIFO
  const results = [];

  // let currNode = root;
  // let currRoot = root;

  // while (currNode) {
  //   stack.push(currNode);
  //   currRoot = currNode;
  //   if (currRoot.left) {
  //     while (currNode.left) {
  //       stack.push(currNode.val);
  //       currNode = currNode.left;
  //     }
  //   }
  //   if (currNode.right) {
  //     while (currRoot.right) {
  //       stack.push(currNode.val);
  //       currNode = currNode.right;
  //     }
  //   }
  //   if(!currNode.left && !currNode.right) currRoot;
  // }
  
  // Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
  // Output: [4,2,6,5,7,1,3,9,8]

//             1
//            /  \
//           2     3
//          / \      \
//         4   5      8
//            / \    /
//           6   7  9

    // function traverse(root) {
    //   if(!root) return;
    //   if(root.left) traverse(root.left)
    //     results.push(root.val)
    //   if(root.right) traverse(root.right)
    // }

    // traverse(root)


    let node = root
    const stack = [];
    while(node || stack.length){
      if(node.left) {
        stack.push(node)
        node = node.left
      } else {
        results.push(node.val)
        if(node.right) {
          // stack.push(node.right)
          node = node.right
        }
      }

      if(!node.left && !node.right) {
        node = stack.pop()
      }

    }

  return results;
};


// Call Stack
// ============

// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]

//             1
//            /  \
//           2     3
//          / \      \
//         4   5      8
//            / \    /
//           6   7  9

// traverse(1)
// traverse(2)
// traverse(4) push return [4]
// traverse(2) push        [4, 2]
// traverse(5)
// traverse(6) push return [4, 2, 6]
// traverse(5) push        [4, 2, 6, 5]
// traverse(7) push return [4, 2, 6, 5, 7]
// traverse(5)      return 
// traverse(2)      return
// traverse(1) push        [4, 2, 6, 5, 7, 1]
// traverse(3) push        [4, 2, 6, 5, 7, 1, 3]
// traverse(8) 
// traverse(9) push return [4, 2, 6, 5, 7, 1, 3, 9]
// traverse(8) push return [4, 2, 6, 5, 7, 1, 3, 9, 8]
// traverse(3) return 
// traverse(1) return


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

console.dir(n1, { depth: null });

console.log(inorderTraversal(n1));

// Example 2:
// Input: root = [1,2,3,4,5,null,8,null,null,6,7,9]
// Output: [4,2,6,5,7,1,3,9,8]
// Explanation:
//             1
//            /  \
//           2     3
//          / \      \
//         4   5      8
//            / \    /
//           6   7  9
// (Level-order array above: nulls mark missing children; 3 has no left child, 8 has left 9 only.)
