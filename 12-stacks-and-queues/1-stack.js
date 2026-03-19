class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (this.size === 0) {
      this.last = newNode;
    }
    newNode.next = this.first;
    this.first = newNode;
    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;

    const deletedNode = this.first;

    if (this.first === this.last) this.last = null;

    this.first = this.first.next;
    this.size--;

    deletedNode.next = null;

    return deletedNode.value;
  }
}

function main() {
  const stack = new Stack();
  stack.push(1);
  stack.push(2);
  console.log(stack);
  console.log(stack.pop());
  console.log(stack);
  console.log(stack.pop());
  console.log(stack);
  console.log(stack.pop());
}

main();
