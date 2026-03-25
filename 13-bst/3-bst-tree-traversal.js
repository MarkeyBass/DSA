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

  // Breath First Search (Breath before debth - horizontal before verticale)
  // Prints the tree in a horizontal way
  bfs() {
    let node = this.root;
    const queue = [],
      data = [];

    queue.push(node);

    while (queue.length > 0) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    return data;
  }
}

const tree = new BinarySearchTree();
// After inserts below (matches console.dir structure):
//            10
//          /    \
//         3      16
//        / \    /  \
//       2   5  11  17
//          /    \
//         4      13
//        /
//      3.5
tree.insert(10);
tree.insert(3);
tree.insert(2);
tree.insert(16);
tree.insert(17);
tree.insert(5);
tree.insert(4);
tree.insert(3.5);
tree.insert(11);
tree.insert(13);
console.dir(tree, { depth: null });
console.log(tree.bfs());
