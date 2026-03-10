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


// pop test
// console.dir(list, { depth: null });
// console.log("===============================");
// console.dir(list.pop(), { depth: null });
// console.log("===============================");
// console.dir(list, { depth: null });

// console.log("===============================");

// list.traverse();

// console.log("===============================");

// console.log(emptyList.pop());


// shift test
console.dir(list, { depth: null });
console.log("===============================");
console.log(list.shift());
console.log("===============================");
console.dir(list, { depth: null });
console.log("===============================");
console.log(list.shift());
console.log("===============================");
console.dir(list, { depth: null });
console.log("===============================");
console.log(list.shift());
console.log("===============================");
console.dir(list, { depth: null });
console.log("===============================");
console.log(list.shift());
console.log("===============================");
console.dir(list, { depth: null });
console.log("===============================");
console.log(list.shift());
console.log("===============================");
console.dir(list, { depth: null });