class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  #edgesErrorHandler(v1, v2) {
    if (!this.adjacencyList[v1] || (v2 && !this.adjacencyList[v2])) {
      throw new Error("Vertex not found");
    }
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    this.#edgesErrorHandler(v1, v2);
    if (this.adjacencyList[v1].includes(v2)) return;
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    this.#edgesErrorHandler(v1, v2);
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((vertex) => vertex !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((vertex) => vertex !== v1);
  }

  removeVertex(v) {
    this.#edgesErrorHandler(v);

    while (this.adjacencyList[v].length) {
      const adjacentVertex = this.adjacencyList[v].pop();
      this.removeEdge(v, adjacentVertex);
    }

    delete this.adjacencyList[v];
  }

  // depth first traversal of a graph recursive function:
  dfsRecursive(key) {
    const results = [];
    const visited = {};
    const dfs = (vertex) => {
      for (let adjacened of this.adjacencyList[vertex]) {
        if (!visited[adjacened]) {
          visited[adjacened] = true;
          results.push(adjacened);
          dfs(adjacened);
        }
      }
    }
    dfs(key);
    return results;
  }
}

const g = new Graph();

// g.addVertex("Tokyo");
// g.addVertex("San Francisco");
// g.addVertex("Dalas");

// g.addEdge("Tokyo", "Dalas");
// g.addEdge("Tokyo", "San Francisco");

// console.log(g);
// // g.removeEdge("Tokyo", "San Francisco");
// // g.removeVertex("Dalas");
// // console.log(g);

// console.log(g.dfsRecursive("Tokyo"))



g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")
g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge ("E", "F")

console.log(g);

console.log(g.dfsRecursive("A"))