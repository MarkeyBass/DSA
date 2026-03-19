// Stack with 2 Queues - Exercise
// Implement a stack using two queues:

// You should implement the following functions:

// - push (returns the stack)

// - pop (returns the value popped)

// Analyze your time complexity for all of these operations:

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
// 123

// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to end of singly linked list
  enqueue(value) {
    const newNode = new Node(value);
    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  // removes from beggining of SLL
  dequeue() {
    if (this.size === 0) return null;

    const deletedNode = this.first;

    if (this.first === this.last) {
      this.last = null;
    }

    this.first = this.first.next;
    this.size--;

    deletedNode.next = null;

    return deletedNode.value;
  }
}

class Stack {
  constructor() {
    this.queueMain = new Queue();
  }

  push(value) {
    this.queueMain.enqueue(value);

    return this;
  }

  pop() {
    if (this.queueMain.size === 0) return null;
    const queueHelper = new Queue();
    let item = this.queueMain.last;
    let valueToReturn = item ? item.value : null;
    while (this.queueMain.size > 1) {
      item = this.queueMain.dequeue();
      queueHelper.enqueue(item);
    }
    this.queueMain = queueHelper;
    return valueToReturn;
  }

  // pop() {
  //   if (this.queueMain.size === 0) return null;

  //   const helper = new Queue();

  //   // Move all but the last one
  //   while (this.queueMain.size > 1) {
  //     helper.enqueue(this.queueMain.dequeue());
  //   }

  //   // THIS is the one we want to remove from the stack
  //   const valueToReturn = this.queueMain.dequeue();

  //   // The helper now becomes the main queue
  //   this.queueMain = helper;

  //   return valueToReturn;
  // }

  print() {
    const arr = [];
    const queueHelper = new Queue();
    while (this.queueMain.size > 0) {
      const node = this.queueMain.dequeue();
      arr.unshift(node);
      queueHelper.enqueue(node);
    }
    this.queueMain = queueHelper;
    console.log(arr);
  }
}

var s = new Stack();
s.pop();
s.push(5);
s.print();
s.push(10).push(20).push(30);
s.print();

console.log(s.pop()); // 30
s.print();
console.log(s.pop()); // 20
console.log(s.pop()); // 10
console.log(s.pop()); // 5
console.log(s.pop()); // null
s.push(30).push(40).push(50);
console.log(s.pop()); // 50
s.push(60);
console.log(s.pop()); // 60
