class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(node) {
    this.values.push(node);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element.priority >= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    if(this.values.length === 1) return this.values.pop()
    if(this.values.length === 0) return null
    let lastIndex = this.values.length - 1;
    [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
    const minVal = this.values.pop();
    this.bubbleDown();


    // const max = this.values[0];
    // const end = this.values.pop();
    // this.values[0] = end;
    // this.bubbleDown();

    return minVal;
  }

  // sinkDown
  bubbleDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[idx];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftChild;
      let rightChild;
      let swapIdx = null;
      // swaping with left child
      if (leftChildIdx < length) {
        leftChild = this.values[leftChildIdx];
        if (leftChild.priority < element.priority) {
          swapIdx = leftChildIdx;
        }
      }
      // swaping with right child
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild.priority < element.priority) ||
          (swapIdx !== null && rightChild.priority < leftChild.priority)
        ) {
          swapIdx = rightChildIdx;
        }
      }
      // swap procces
      if (swapIdx === null) break;
      [this.values[idx], this.values[swapIdx]] = [this.values[swapIdx], this.values[idx]];
      idx = swapIdx;
    }
  }
}

const mbh = new PriorityQueue();
mbh.enqueue(new Node("homework",41)).enqueue(new Node("project",39)).enqueue(new Node("exam",33)).enqueue(new Node("interview",18)).enqueue(new Node("presentation",27)).enqueue(new Node("meeting",12));
console.log(mbh);
mbh.enqueue(new Node("lunch",55));
console.log(mbh);
mbh.enqueue(new Node("dinner",49));
console.log(mbh);
mbh.dequeue();
console.log(mbh);
mbh.dequeue();
console.log(mbh);
mbh.dequeue();
console.log(mbh);
mbh.dequeue();
console.log(mbh);
mbh.dequeue();
console.log(mbh);
mbh.dequeue();
console.log(mbh);
mbh.dequeue();
console.log(mbh);
mbh.dequeue();
console.log(mbh);
