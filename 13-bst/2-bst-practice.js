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
    // step 0 - edge case
    if (!this.root) return false;
    // step 1 - find the node and it's parent
    let curr = this.root;
    let parent = null;
    while (curr && curr.value !== value) {
      parent = curr;
      curr = value > curr.value ? curr.right : curr.left;
    }
    if (!curr) return false;

    // step 2 - Case node is leaf
    if (!curr.left && !curr.right) {
      if (parent.left === curr) parent.left = null;
      else if (parent.right === curr) parent.right = null;

      return true;
    }

    // step 3 - case one successor
    // if (!curr.left || !curr.right) {
    //   if (curr.left) {
    //     if (parent.value > curr.value) parent.left = curr.left;
    //     else parent.right = curr.left;
    //   } else {
    //     if (parent.value > curr.value) parent.left = curr.right;
    //     else parent.right = curr.right;
    //   }
    // }

    if (!curr.left || !curr.right) {
      const child = curr.left ? curr.left : curr.right;
      if (parent.value > curr.value) parent.left = child;
      else parent.right = child;

      return true;
    }

    // step 4 - if node has two children
    if (curr.left && curr.right) {
      let succParent = curr;
      let succ = curr.right;

      while (succ.left) {
        succParent = succ;
        succ = succ.left;
      }

      curr.value = succ.value;

      // succParent.left = null;
      // succParent.left = succ.right ? succ.right : null;
      if(succParent.left === succ) {
        succParent.left = succ.right
      } else {
        succParent.right = succ.right
      }

      return true;
    }
  }

  findSecondLargest() {}

  isBalanced() {}
}

const tree = new BinarySearchTree();



// // After inserts below (matches console.dir structure):
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
// console.log(tree.find(5));
console.log(tree.remove(16));
console.dir(tree, { depth: null });
// console.log(tree.remove(16));
// console.dir(tree, { depth: null });
// console.log(tree.remove(11));
// console.dir(tree, { depth: null });
// console.log(tree.remove(13));
// console.dir(tree, { depth: null });
// console.log(tree.remove(3));
// console.dir(tree, { depth: null });
// console.log(tree.remove(5));
// console.dir(tree, { depth: null });
// console.log(tree.remove(4));
// console.dir(tree, { depth: null });

