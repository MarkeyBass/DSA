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
}

const graph = new WeightGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B", 9);
graph.addEdge("A", "C", 5);
graph.addEdge("B", "C", 7);

console.log(graph.adjacencyList);

/*
 * Weighted undirected graph — “shortest path from A to E”
 *
 * Vertices: A, B, C, D, E, F
 *
 * Edges (weight in parentheses):
 *   A — B (4)    B — E (3)
 *   A — C (2)    C — D (2)
 *                C — F (4)
 *                D — E (3)
 *                D — F (1)
 *                F — E (1)
 *
 * Adjacency-style view:
 *   A: B(4), C(2)
 *   B: A(4), E(3)
 *   C: A(2), D(2), F(4)
 *   D: C(2), E(3), F(1)
 *   E: B(3), D(3), F(1)
 *   F: C(4), D(1), E(1)
 *
 *        A
 *     4 / \ 2
 *      B   C
 *    3|  2/ \4
 *      E   D---F
 *       \3 1/ \1
 *        `--E--´  (triangle D–E–F: DE=3, DF=1, FE=1)
 */