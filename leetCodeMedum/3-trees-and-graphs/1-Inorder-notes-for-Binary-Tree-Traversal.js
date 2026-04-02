var inorderTraversal = function (root) {
  // // LIFO
  // const stack = [];
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

    function traverse(root) {
      // if(!root) return;
      // if(root.left) traverse(root.left)
      // results.push(root.val)
      // if(root.right) traverse(root.right)
      if (!root) return;
      traverse(root.left);
      results.push(root.val);
      traverse(root.right);
    }

    traverse(root)

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
