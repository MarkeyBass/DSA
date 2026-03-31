// Graphs - DFS Exercise
// Implement the following method on the Graph class:

// depthFirstSearch - this function should return an array of nodes visited using DFS. You can do this iteratively (using a stack) or recursively, but note the order of the results will be different. The test cases should accommodate this.

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((v) => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter((v) => v !== vertex1);
  }
  depthFirstSearch(start) {
    const visited = { [start]: true };
    const stack = [start];
    const results = [];
    while (stack.length > 0) {
      const currVertex = stack.pop();
      results.push(currVertex);
      for (let neighbor of this.adjacencyList[currVertex]) {
        if (!visited[neighbor]) {
          stack.push(neighbor);
          visited[neighbor] = true;
        }
      }
    }
    return results;
  }

  depthFirstSearchRecursive(start) {
    const visited = {};
    const results = [];

    const adjacencyList = this.adjacencyList;

    (function bfs(vertex) {
      results.push(vertex);
      visited[vertex] = true;
      const neighbors = adjacencyList[vertex];
      for (let n of neighbors) {
        if (!visited[n]) {
          bfs(n);
        }
      }
    })(start);

    return results;
  }
}

var graph = new Graph();

graph.addVertex("S");
graph.addVertex("P");
graph.addVertex("U");
graph.addVertex("X");
graph.addVertex("Q");
graph.addVertex("Y");
graph.addVertex("V");
graph.addVertex("R");
graph.addVertex("W");
graph.addVertex("T");

graph.addEdge("S", "P");
graph.addEdge("S", "U");

graph.addEdge("P", "X");
graph.addEdge("U", "X");

graph.addEdge("P", "Q");
graph.addEdge("U", "V");

graph.addEdge("X", "Q");
graph.addEdge("X", "Y");
graph.addEdge("X", "V");

graph.addEdge("Q", "R");
graph.addEdge("Y", "R");

graph.addEdge("Y", "W");
graph.addEdge("V", "W");

graph.addEdge("R", "T");
graph.addEdge("W", "T");

console.log(graph.depthFirstSearchRecursive("S"));
console.log(graph.depthFirstSearch("S"));

/**
 * results:
 *
 * ["S", "P", "X", "U", "V", "W", "Y", "R", "Q", "T"] // recursive version
 * ["S", "U", "V", "W", "T", "R", "Q", "Y", "X", "P"] // iterative (stack) version
 *
 **/
