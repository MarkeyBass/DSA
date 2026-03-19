class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
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

  push(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail.next.prev = this.tail; // newNode.prev = this.tail
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (this.length === 0) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode;
  }

  shift() {
    if (this.length === 0) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let current, counter;
    if (index < this.length / 2) {
      counter = 0;
      current = this.head;
      while (counter !== index) {
        current = current.next;
        counter++;
      }
    } else {
      counter = this.length - 1;
      current = this.tail;
      while (counter !== index) {
        current = current.prev;
        counter--;
      }
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

    const newNode = new Node(val);
    const prevNode = this.get(index - 1);
    const nextNode = prevNode.next;

    newNode.next = nextNode;
    newNode.prev = prevNode;
    nextNode.prev = newNode;
    prevNode.next = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) {
      return this.shift();
    }
    if (index === this.length - 1) {
      return this.pop();
    }

    const prevNode = this.get(index - 1);
    const currNode = prevNode.next;
    const nextNode = currNode.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;
    currNode.next = null;
    currNode.prev = null;
    this.length--;
    return currNode;
  }

  // Extra Challenge: DLL reverse - Exercise
  // Implement the following on the DoublyLinkedList class:

  // reverse

  // This function should reverse all of the nodes in a DoublyLinkedList, and should return the list.

  // let doublyLinkedList = new DoublyLinkedList;
  // doublyLinkedList.push(5).push(10).push(15).push(20)
  // doublyLinkedList.reverse(); // singlyLinkedList;
  // doublyLinkedList.length; // 4
  // doublyLinkedList.head.val; // 20
  // doublyLinkedList.head.next.val; // 15
  // doublyLinkedList.head.next.next.val; // 10
  // doublyLinkedList.head.next.next.next.val; // 5

  reverse() {
    let currNode = this.head;

    for (let i = 0; i < this.length; i++) {
      const nextNode = currNode?.next || null;
      const prevNode = currNode?.prev || null;
      currNode.prev = nextNode;
      currNode.next = prevNode;
      currNode = nextNode;
    }

    [this.head, this.tail] = [this.tail, this.head];
    return this;
  }
}

function main() {
  const dll = new DoublyLinkedList();
  dll.push(3);
  dll.push(6);
  dll.push(9);
  dll.push(12);

  dll.print();
  dll.reverse();
  dll.print();
}

main();
