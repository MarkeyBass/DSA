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

// const first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("how")
// first.next.next.next = new Node("are")
// first.next.next.next.next = new Node("you")

// // console.log(first)

// // push test
// const list = new SinglyLinkedList();
// list.push("HELLO");
// list.push("GOODBYE");
// list.push("Final");
// list.push("Really Final");

// const emptyList = new SinglyLinkedList();

// // ############
// // # pop test #
// // ############
// // console.dir(list, { depth: null });
// // console.log("===============================");
// // console.dir(list.pop(), { depth: null });
// // console.log("===============================");
// // console.dir(list, { depth: null });

// // console.log("===============================");

// // list.traverse();

// // console.log("===============================");

// // console.log(emptyList.pop());

// // ##############
// // # shift test #
// // ##############
// // console.dir(list, { depth: null });
// // console.log("===============================");
// // console.log(list.shift());
// // console.log("===============================");
// // console.dir(list, { depth: null });
// // console.log("===============================");
// // console.log(list.shift());
// // console.log("===============================");
// // console.dir(list, { depth: null });
// // console.log("===============================");
// // console.log(list.shift());
// // console.log("===============================");
// // console.dir(list, { depth: null });
// // console.log("===============================");
// // console.log(list.shift());
// // console.log("===============================");
// // console.dir(list, { depth: null });
// // console.log("===============================");
// // console.log(list.shift());
// // console.log("===============================");
// // console.dir(list, { depth: null });

// // ################
// // # unshift test #
// // ################

// // console.dir(list, { depth: null });
// // console.log("=======================");
// // console.dir(list.unshift("Ek!!!"), { depth: null });

// // ############
// // # get test #
// // ############

// // console.dir(list.get(-1), { depth: null });
// // console.dir(list.get(0), { depth: null });
// // console.dir(list.get(1), { depth: null });
// // console.dir(list.get(2), { depth: null });
// // console.dir(list.get(3), { depth: null });
// // console.dir(list.get(4), { depth: null });

// // ############
// // # set test #
// // ############

// // console.dir(list.set(-1, "!"), { depth: null });
// // console.log(list.get(0));
// // console.log(list.set(0, "@"));
// // console.log(list.get(0));
// // console.log("================")
// // console.log(list.get(1));
// // console.log(list.set(1, "@"));
// // console.log(list.get(1));

// // ###############
// // # insert test #
// // ###############

// console.log(list.insert(-1, "bla"));
// console.dir(list, { depth: null });
// console.log(list.insert(0, "bla"));
// console.dir(list, { depth: null });
// console.log(list.insert(1, "bla"));
// console.dir(list, { depth: null });
// console.log(list.insert(list.length, "bla"));
// console.dir(list, { depth: null });
// console.log(list.insert(list.length + 3, "bla"));

// ###############
// # remove test #
// ###############

// console.log(list.remove(-1));
// console.dir(list, { depth: null });
// console.log(list.remove(0));
// console.dir(list, { depth: null });
// console.log(list.remove(100));
// console.log(list.remove(2));
// console.dir(list, { depth: null });

// ##################
// # remove reverse #
// ##################

const list3 = new SinglyLinkedList();
list3.push(100).push(201).push(350).push(999);

list3.print();
console.dir(list3, { depth: null });
list3.reverse();
console.dir(list3, { depth: null });
list3.print();
