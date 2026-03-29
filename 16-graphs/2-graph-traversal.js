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
  dfsRecursive(start) {
    if (!this.adjacencyList[start]) return [];
    if (this.adjacencyList[start].length === 0) return [start];
    const results = [];
    const visited = {};
    results.push(start);
    visited[start] = true;
    const dfs = (vertex) => {
      for (let adjacent of this.adjacencyList[vertex]) {
        if (!visited[adjacent]) {
          visited[adjacent] = true;
          results.push(adjacent);
          dfs(adjacent);
        }
      }
    };
    dfs(start);
    return results;
  }

  dfsRecursiveColt(start) {
    if (!this.adjacencyList[start]) return [];
    if (this.adjacencyList[start].length === 0) return [start];
    const results = [];
    const visited = {};
    const adjacencyList = this.adjacencyList;

    (function dfs(vertex) {
      if (!adjacencyList[vertex]) return null;
      visited[vertex] = true;
      results.push(vertex);
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);

    return results;
  }

  dfsIterative(start) {
    if (!this.adjacencyList[start]) return [];
    if (this.adjacencyList[start].length === 0) return [start];
    const stack = [start];
    const visited = {[start]: true};
    const results = [];
    let currVertex;

    while (stack.length !== 0) {
      currVertex = stack.pop();

      results.push(currVertex);

      const neighbors = this.adjacencyList[currVertex];
      for (let neighbor of neighbors) {
        if (visited[neighbor] === undefined) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      }
    }
    return results;
  }
}

const g = new Graph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");
g.addVertex("ZEB");
g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");
g.addEdge("C", "E");
g.addEdge("D", "E");
g.addEdge("D", "F");
g.addEdge("E", "F");

console.log(g);

console.log(g.dfsRecursive("AB"));
console.log(g.dfsRecursive("ZEB"));
console.log(g.dfsRecursive("A"));
console.log(g.dfsRecursive("E"));
console.log("dfsRecursive", g.dfsRecursive("F"));
console.log("dfsRecursiveColt", g.dfsRecursiveColt("F"));
console.log("dfsIterative", g.dfsIterative("F"));

/*
 * Slide example — undirected graph (A–F):
 *
 *        A
 *       / \
 *      B   C
 *      |   |
 *      D---E
 *       \ /
 *        F
 *
 * Adjacency list:
 *   A: B, C     B: A, D     C: A, E
 *   D: B, E, F  E: C, D, F  F: D, E
 *
 * {
 *   "A": ["B", "C"],
 *   "B": ["A", "D"],
 *   "C": ["A", "E"],
 *   "D": ["B", "E", "F"],
 *   "E": ["C", "D", "F"],
 *   "F": ["D", "E"]
 * }
 *
 * DFS visited (order of discovery when starting at A): A → B → D → E → C → F
 * {
 *   "A": true,
 *   "B": true,
 *   "D": true,
 *   "E": true,
 *   "C": true,
 *   "F": true
 * }
 */
