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
      smallest = nodes.dequeue().val;
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
