// piece of data - val
//reference to next node - next

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

    this.tail = `newTail`;
    newTail.next = null;

    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

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
      return !!this.unshift(val);
    } else if (index === this.length) {
      return !!this.push(val);
    }

    const foundNode = this.get(index - 1);
    if (foundNode) {
      const newNode = new Node(val);
      newNode.next = foundNode.next;
      foundNode.next = newNode;
      return true;
    }
    return false;
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

// console.log(first)

// push test
const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("Final");
list.push("Really Final");

const emptyList = new SinglyLinkedList();

// ############
// # pop test #
// ############
// console.dir(list, { depth: null });
// console.log("===============================");
// console.dir(list.pop(), { depth: null });
// console.log("===============================");
// console.dir(list, { depth: null });

// console.log("===============================");

// list.traverse();

// console.log("===============================");

// console.log(emptyList.pop());

// ##############
// # shift test #
// ##############
// console.dir(list, { depth: null });
// console.log("===============================");
// console.log(list.shift());
// console.log("===============================");
// console.dir(list, { depth: null });
// console.log("===============================");
// console.log(list.shift());
// console.log("===============================");
// console.dir(list, { depth: null });
// console.log("===============================");
// console.log(list.shift());
// console.log("===============================");
// console.dir(list, { depth: null });
// console.log("===============================");
// console.log(list.shift());
// console.log("===============================");
// console.dir(list, { depth: null });
// console.log("===============================");
// console.log(list.shift());
// console.log("===============================");
// console.dir(list, { depth: null });

// ################
// # unshift test #
// ################

// console.dir(list, { depth: null });
// console.log("=======================");
// console.dir(list.unshift("Ek!!!"), { depth: null });

// ############
// # get test #
// ############

// console.dir(list.get(-1), { depth: null });
// console.dir(list.get(0), { depth: null });
// console.dir(list.get(1), { depth: null });
// console.dir(list.get(2), { depth: null });
// console.dir(list.get(3), { depth: null });
// console.dir(list.get(4), { depth: null });

// ############
// # set test #
// ############

// console.dir(list.set(-1, "!"), { depth: null });
// console.log(list.get(0));
// console.log(list.set(0, "@"));
// console.log(list.get(0));
// console.log("================")
// console.log(list.get(1));
// console.log(list.set(1, "@"));
// console.log(list.get(1));

// ###############
// # insert test #
// ###############

console.log(list.insert(-1, "bla"));
console.dir(list, { depth: null });
console.log(list.insert(0, "bla"));
console.dir(list, { depth: null });
console.log(list.insert(1, "bla"));
console.dir(list, { depth: null });
console.log(list.insert(list.length, "bla"));
console.dir(list, { depth: null });
console.log(list.insert(list.length + 3, "bla"));
