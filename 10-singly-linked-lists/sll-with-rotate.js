// piece of data - val
//reference to next node - next

// insertion - push & shift O(1)
//           - add O(n)
// removal - unshift O(1)
//         - pop & remove O(n)
// search  - O(n)
// access  - O(n)

// SLLs are excellent alternative to arrays when insertion and deletion at the beginning are frequently required.

// Arrays contain a built in index, whereas length lists do not.

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // ##############################
  // rotate Additional exercise
  //##############################

  // This function should rotate all the nodes in the list by some number passed in. For instance, if your list looks like 1 -> 2 -> 3 -> 4 -> 5 and you rotate by 2, the list should be modified to 3 -> 4 -> 5 -> 1 -> 2. The number passed in to rotate can be any integer.

  // Time Complexity: O(N), where N is the length of the list.

  // Space Complexity: O(1)

  rotate(index) {
    if (index < 0 || index >= this.length) return undefined;
    let curr = this.head;
    for (let j = 0; j < index; j++) {
      this.tail.next = curr;
      this.head = curr.next;
      curr.next = null;
      this.tail = curr;
      curr = this.head;
    }
    return this;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    newTail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  // pop() {
  //   if (!this.head) return undefined;
  //   let prev = null;
  //   let curr = this.head;
  //   while (curr.next) {
  //     prev = curr;
  //     curr = curr.next;
  //   }
  //   prev.next = null;
  //   this.length--;
  //   this.tail = prev;

  //   if (this.length === 0) {
  //     this.tail = null;
  //     this.head = null;
  //   }

  //   return curr;
  // }

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) this.tail = null;
    return currentHead;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      const oldHead = this.head;
      newNode.next = oldHead;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  // get(searchIndex) {
  //   if (searchIndex < 0 || searchIndex > this.length - 1) {
  //     return undefined;
  //   } else if (searchIndex === 0) {
  //     return this.head;
  //   } else {
  //     let currNode = this.head;
  //     for (let i = 1; i <= searchIndex; i++) {
  //       currNode = currNode.next;
  //       if (i === searchIndex) return currNode;
  //     }
  //   }
  // }

  get(index) {
    if (index < 0 || index >= this.length) return undefined;
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }

    const foundNode = this.get(index - 1);

    const newNode = new Node(val);
    newNode.next = foundNode.next;
    foundNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) {
      return undefined;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const removedNode = prevNode.next;
    prevNode.next = prevNode.next.next;

    this.length--;
    return removedNode;
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.val);
      current = current.next;
    }
    console.log(arr);
  }

  // reverse() {
  //   // the var we're currently looking at
  //   let node = this.head;
  //   // this.head = this.tail;
  //   // this.tail = node;

  //   let next = null;
  //   let prev = null;

  //   for (let i = 0; i < this.length; i++) {
  //     next = node.next;
  //     node.next = prev;
  //     prev = node;
  //     node = next;
  //   }

  //   let tempHead = this.head
  //   this.head = this.tail;
  //   this.tail = tempHead;

  //   return this;
  // }

  // reverse() {
  //   if (this.length < 2) return this;
  //   let node = this.head;
  //   let next = null;
  //   let prev = null;

  //   // a -> b -> c -> d
  //   // <- A  (B) -> c -> d
  //   // <- A <- (B)  C -> d
  //   for (let i = 0; i < this.length; i++) {
  //     next = node.next;
  //     node.next = prev;
  //     prev = node;
  //     node = next;
  //   }

  //   [this.head, this.tail] = [this.tail, this.head];
  //   return this;
  // }

  reverse() {
    if (this.length <= 1) return this;

    let node = this.head;
    let next = undefined;
    let prev = null;

    // [ 100, 201, 350, 999 ]

    for (let i = 0; i < this.length; i++) {
      // reassigning next before changing node
      next = node.next;
      // repointing curr node
      node.next = prev;
      // reassigning temp vars
      prev = node;
      // finished repointing and reassigning -> moving one step forward
      node = next;
    }

    [this.head, this.tail] = [this.tail, this.head];

    return this;
  }

  traverse() {
    let current = this.head;
    if (!current) return undefined;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next // null
var singlyLinkedList = new SinglyLinkedList;
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
 
singlyLinkedList.rotate(1000);
singlyLinkedList.head.val; // 5
singlyLinkedList.head.next.val; // 10
singlyLinkedList.head.next.next.val; // 15
singlyLinkedList.head.next.next.next.val; // 20
singlyLinkedList.head.next.next.next.next.val; // 25
singlyLinkedList.tail.val; // 25
singlyLinkedList.tail.next // null