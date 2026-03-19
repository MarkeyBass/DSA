class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// FIFO
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  // add to end of singly linked list
  enqueue(val) {
    const newNode = new Node(val);
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

function main() {
  const queue = new Queue();
  queue.enqueue(1);
  queue.enqueue(2);
  console.log(queue);
  console.log(queue.dequeue());
  console.log(queue);
  console.log(queue.dequeue());
  console.log(queue);
  console.log(queue.dequeue());
}

main();
