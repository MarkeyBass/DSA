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
    return this.search(value) !== undefined;
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
console.log(tree.search(5));
