class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({ val, priority });
    this.sort();
  }
  dequeue() {
    return this.values.shift();
  }
  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}

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
    const distances = {};
    const previous = {};
    const visited = [];
    let currVertex = start;
    for (let key in this.adjacencyList) {
      distances[key] = Infinity;
      previous[key] = null;
    }
    distances[start.weight] = 0;

    const priorityQueue = new PriorityQueue();

    for (let [node, distance] of Object.entries(distances)) {
      priorityQueue.enqueue(node, distance);
    }

    // while (priorityQueue.values.length) {}
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

  console.log(graph.adjacencyList);

  console.log(graph.dijskstra("A", "E"))
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
