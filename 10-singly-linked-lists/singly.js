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
  // remove from tail
  pop() {
    if (!this.head) return;
    if(this.length = 1) {
      const returnedNode = this.head
      this.tail = null
      this.head = null
      return returnedNode
    }
    let currNode = this.head;
    let returnedNode;
    while (currNode.next) {
      if (!currNode.next.next) {
        returnedNode = JSON.parse(JSON.stringify(currNode.next));
        delete currNode.next;
        currNode.next = null;
        this.tail = currNode;
        this.length--;
      } else {
        currNode = currNode.next;
      }
    }
    return returnedNode;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  traverse() {
    let current = this.head;
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

const list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("Final");
list.push("Really Final");

console.dir(list, { depth: null });
console.log("===============================");
console.dir(list.pop(), { depth: null });
console.log("===============================");
console.dir(list, { depth: null });

console.log("===============================");

list.traverse();

console.log("===============================");

const list2 = new SinglyLinkedList();
console.log(list2.pop());
