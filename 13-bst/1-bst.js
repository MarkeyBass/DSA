class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    }
    let currNode = this.root;
    while (true) {
      if (value < currNode.value) {
        if (currNode.left === null) {
          currNode.left = newNode;
          return this;
        }
        currNode = currNode.left;
      } else if (value > currNode.value) {
        if (currNode.right === null) {
          currNode.right = newNode;
          return this;
        }
        currNode = currNode.right;
      } else return this;
    }
  }

  find(value) {
    let currNode = this.root;
    while (currNode !== null) {
      if (value === currNode.value) return currNode;
      else if (value < currNode.value) {
        currNode = currNode.left;
      } else {
        currNode = currNode.right;
      }
    }
    return undefined;
  }

  contains(value) {
    return this.find(value) !== undefined;
  }

  remove(value) {
    if (!this.root) return false;

    let parent = null;
    let current = this.root;

    // 1) Find node to remove
    while (current && current.value !== value) {
      parent = current;
      current = value < current.value ? current.left : current.right;
    }
    if (!current) return false; // not found

    // Helper to reconnect parent -> newChild
    const replaceChild = (parentNode, oldChild, newChild) => {
      if (!parentNode) {
        this.root = newChild; // removing root
      } else if (parentNode.left === oldChild) {
        parentNode.left = newChild;
      } else {
        parentNode.right = newChild;
      }
    };

    // 2) Case A/B: 0 or 1 child
    if (!current.left || !current.right) {
      const child = current.left ? current.left : current.right; // may be null
      replaceChild(parent, current, child);
      return true;
    }

    // 3) Case C: 2 children
    // Find successor: leftmost in right subtree
    let succParent = current;
    let succ = current.right;
    while (succ.left) {
      succParent = succ;
      succ = succ.left;
    }

    // Copy successor value into current node
    current.value = succ.value;

    // Remove successor node (it has at most one child: right)
    if (succParent.left === succ) {
      succParent.left = succ.right;
    } else {
      succParent.right = succ.right;
    }

    return true;
  }


  findSecondLargest() {
    if (!this.root || (!this.root.left && !this.root.right)) return undefined;

    let parent = null;
    let current = this.root;

    // Walk to the largest node (rightmost).
    while (current.right) {
      parent = current;
      current = current.right;
    }

    // If largest has a left subtree, second largest is max of that subtree.
    if (current.left) {
      current = current.left;
      while (current.right) {
        current = current.right;
      }
      return current.value;
    }

    // Otherwise, parent of largest is second largest.
    return parent ? parent.value : undefined;
  }

  // Extra Challenge: Binary Search Tree - isBalanced Exercise
  // Write a function on the BinarySearchTree class:

  // isBalanced - returns true if the BST is balanced, otherwise returns false.

  // A balanced tree is defined as a tree where the depth of all leaf nodes or nodes with single children differ by no more than one.

  isBalanced() {
    if (!this.root) return true;

    let minDepth = Infinity;
    let maxDepth = -Infinity;
    const stack = [[this.root, 0]];

    while (stack.length) {
      const [node, depth] = stack.pop();
      const hasLeft = node.left !== null;
      const hasRight = node.right !== null;

      // Challenge definition: track leaves and nodes with a single child.
      if (!hasLeft || !hasRight) {
        if (depth < minDepth) minDepth = depth;
        if (depth > maxDepth) maxDepth = depth;
        if (maxDepth - minDepth > 1) return false;
      }

      if (hasLeft) stack.push([node.left, depth + 1]);
      if (hasRight) stack.push([node.right, depth + 1]);
    }

    return true;
  }
}







// simple insertion
// const tree = new BinarySearchTree();
// tree.root = new Node(10);
// tree.root.right = new Node(15);
// tree.root.left = new Node(7);
// tree.root.left.right = new Node(9);

// console.dir(tree, { depth: null });

const tree = new BinarySearchTree();
//     10
//  5     13
//2  7  11  16
tree.insert(10);
tree.insert(3);
tree.insert(2);
tree.insert(16);
tree.insert(5);
tree.insert(13);
console.dir(tree, { depth: null });
// console.log(tree.find(5));
// console.log(tree.remove(10));
// console.dir(tree, { depth: null });
// console.log(tree.remove(5));
// console.dir(tree, { depth: null });
console.log(tree.findSecondLargest())



var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15);
binarySearchTree.insert(20);
binarySearchTree.insert(10);
binarySearchTree.insert(12);
binarySearchTree.isBalanced(); // true
 
var binarySearchTree2 = new BinarySearchTree();
binarySearchTree2.insert(5);
binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(6);
binarySearchTree2.isBalanced(); // true
binarySearchTree2.insert(7);
binarySearchTree2.isBalanced(); // false