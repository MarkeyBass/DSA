class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  #edgesErrorHandler(v1, v2) {
    if (!this.adjacencyList[v1] || (v2 && !this.adjacencyList[v2])) {
      throw new Error("Vertex not found");
    }
  }

  addVertext(vertex) {
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
    // let index = this.adjacencyList[v1].findIndex((el) => el === v2);
    // this.adjacencyList[v1].splice(index, 1);

    // index = this.adjacencyList[v2].findIndex((el) => el === v1);
    // this.adjacencyList[v2].splice(index, 1);

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
}

const g = new Graph();

g.addVertext("Tokyo");
g.addVertext("San Francisco");
g.addVertext("Dalas");

g.addEdge("Tokyo", "Dalas");
g.addEdge("Tokyo", "San Francisco");

console.log(g);
// g.removeEdge("Tokyo", "San Francisco");
g.removeVertex("Dalas");
console.log(g);
