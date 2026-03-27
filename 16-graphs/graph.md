// ESSENTIAL GRAPH TERMS
// ● Vertex - a node
// ● Edge - a connection between two vertices
// ● Weighted/Unweighted - values assigned to distances between vertices
//   Weighted - there is an information about the connection between the vertices (e.g. distance, time, cost, etc.)
// ● Directed/Undirected - directions assigned to distanced between vertices
//   Undirected - there is two way connection between vertices
//   Directed - there might be one way connection or two way connection between vertices

// ● Cyclic/Acyclic - a graph where there is a cycle in the graph, otherwise it is acyclic.

// Graphs can be represented in two ways:
// ● Adjacency Matrix - a 2D array of size V x V where V is the number of vertices.
// Undirected 6-cycle A–B–C–D–E–F–A. Rows/columns: A, B, C, D, E, F
//     A  B  C  D  E  F
// A [ 0, 1, 0, 0, 0, 1 ]
// B [ 1, 0, 1, 0, 0, 0 ]
// C [ 0, 1, 0, 1, 0, 0 ]
// D [ 0, 0, 1, 0, 1, 0 ]
// E [ 0, 0, 0, 1, 0, 1 ]
// F [ 1, 0, 0, 0, 1, 0 ]
adjacencyMatrix = [
  [0, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 0],
  [0, 1, 0, 1, 0, 0],
  [0, 0, 1, 0, 1, 0],
  [0, 0, 0, 1, 0, 1],
  [1, 0, 0, 0, 1, 0],
];


// ● Adjacency List - an array of lists where each index represents a vertex and the list at that index represents the vertices that are connected to it.
adjacencyList = [
  [1, 5],
  [0, 2],
  [1, 3],
  [2, 4],
  [3, 5],
  [4, 0],
];

adjacencyList2 = {
  "A": ["B", "F"],
  "B": ["A", "C"],
  "C": ["B", "D"],
  "D": ["C", "E"],
  "E": ["D", "F"],
  "F": ["E", "A"]
}

// Adjacency Matrix
// ● A 2D array of size V x V where V is the number of vertices.
// ● The value at row i and column j is 1 if there is an edge from vertex i to vertex j, otherwise 0.

// P.S.
// ● Tree is a graph where there is only one path between any two vertices.
// ● Graphs in general are free style
