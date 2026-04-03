class WeightGraph {
  constructor() {
    this.adjacencyList = {};
    /**
     * {
     *  "A": [{ node: "B", weight: 10 }]
     * }
     * */
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  dijskstra(start, finish) {
    const nodes = new PriorityQueue();
    const distances = {};
    const previous = {};
    const path = []; // to return at end
    let smallest;
    // build initial state:
    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        nodes.enqueue(vertex, 0);
      } else {
        distances[vertex] = Infinity;
        nodes.enqueue(vertex, Infinity);
      }
      previous[vertex] = null;
    }

    // console.log({ distances });
    // console.log({ "nodes.value": nodes.values });

    // As long as there is something to visit
    while (nodes.values.length) {
      smallest = nodes.dequeue().value;
      // console.log(smallest);

      if (smallest === finish) {
        // We are done and we need to build path to return at the end
        console.log(distances);
        console.log(previous);

        ///
        while (previous[smallest]) {
          path.push(smallest);
          smallest = previous[smallest];
        }
        break;
      }
      if (smallest || distances[smallest] !== Infinity) {
        // loop over neighboring nodes
        for (let neighbor of this.adjacencyList[smallest]) {
          // console.log(neighbor);
          // calculate new distance to neighboring node
          let candidateDistance = distances[smallest] + neighbor.weight;

          if (candidateDistance < distances[neighbor.node]) {
            // updating new smallest distance to neighbor
            distances[neighbor.node] = candidateDistance;
            // updating previous - how we got to neighbor
            previous[neighbor.node] = smallest;
            // enqueue in proirity queue with new priority
            nodes.enqueue(neighbor.node, candidateDistance);
          }
        }
      }
    }

    return path.concat(smallest).reverse();
  }
}


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

  enqueue(value, priority) {
    this.values.push(new Node(value, priority));
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

/*            A
 *          /    \
 *         /       \ 4
 *      2 /          \
 *       /  2          B
 *      C ------ D      \ 3
 *       \       | \     \
 *       4\     1|   \3   |
 *          \    |     \ E
 *            \  |      /
 *             \ |    / 1
 *              \|  /
 *               F
 */
function main() {
  const graph = new WeightGraph();

  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");

  graph.addEdge("A", "B", 4);
  graph.addEdge("A", "C", 2);
  graph.addEdge("B", "E", 3);
  graph.addEdge("C", "D", 2);
  graph.addEdge("C", "F", 4);
  graph.addEdge("D", "E", 3);
  graph.addEdge("D", "F", 1);
  graph.addEdge("E", "F", 1);

  // console.log(graph.adjacencyList);
  console.log(graph.dijskstra("A", "E"));
}

main();

// function priorityQueueTest() {
// const q = new PriorityQueue();
// q.enqueue("A", 0);
// q.enqueue("B", 3);
// q.enqueue("C", 5);
// q.enqueue("D", 2);
// q.enqueue("Q", 20);
// q.enqueue("P", 1.5);
// console.log(q.values);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.values);
// }
