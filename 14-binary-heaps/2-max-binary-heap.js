class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  // insert(value) {
  //   // push the value to the end and bubble it up till it finds it's correct place (swap the values till value is in the correct spot)
  //   this.values.push(value);

  //   let elementIdx = this.values.length - 1;
  //   let parentIdx = Math.floor((elementIdx - 1) / 2);
  //   while (this.values[elementIdx] > this.values[parentIdx] && parentIdx >= 0) {
  //     [this.values[elementIdx], this.values[parentIdx]] = [this.values[parentIdx], this.values[elementIdx]];
  //     elementIdx = parentIdx;
  //     parentIdx = Math.floor((elementIdx - 1) / 2);
  //   }
  //   return this;
  // }

  insert(value) {
    // push the value to the end and bubble it up till it finds it's correct place (swap the values till value is in the correct spot)
    this.values.push(value);
    this.bubbleUp();
    return this;
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];
      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
    if(this.values.length === 1) return this.values.pop()
    if(this.values.length === 0) return null

    let lastIndex = this.values.length - 1;
    [this.values[0], this.values[lastIndex]] = [this.values[lastIndex], this.values[0]];
    const maxVal = this.values.pop();
    this.bubbleDown();

    return maxVal;
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
        if (leftChild > element) {
          swapIdx = leftChildIdx;
        }
      }
      // swaping with right child
      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swapIdx === null && rightChild > element) ||
          (swapIdx !== null && rightChild > leftChild)
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

const mbh = new MaxBinaryHeap();
mbh.insert(41).insert(39).insert(33).insert(18).insert(27).insert(12);
console.log(mbh);
mbh.insert(55);
console.log(mbh);
mbh.insert(49);
console.log(mbh);
mbh.insert(5);
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);
mbh.extractMax();
console.log(mbh);
