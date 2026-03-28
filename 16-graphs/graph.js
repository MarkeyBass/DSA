class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertext(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) {
      throw new Error("Vertex not found");
    }

    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }
}

const g = new Graph();

g.addVertext("Tokyo");
g.addVertext("San Francisco");
g.addVertext("Dalas");

g.addEdge("Tokyo", "Dalas");


console.log(g)