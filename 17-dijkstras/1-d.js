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
 * 
 *             A
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
 * 
 * Find shortest path from A to E
 * 
 * 1. Every time we look to visit a new node, we 
 *    pick the node with the smallest known distance to visit first.
 * 2. Once we’ve moved to the node we’re going to visit, 
 *    we look at each of its neighbors
 * 3. For each neighboring node, we calculate 
 *    the distance by summing the total edges that lead to the 
 *    node we’re checking from the starting node.
 * 4. If the new total distance to a node is less 
 *    than the previous total, we store the new 
 *    shorter distance for that node.

*/

`
Aertex    | Shortest Distance From A (to any given node)
----------------------------------------------------------
1X A      | 0
3X B      | infinity -> 4
2X C      | infinity -> 2
4X D      | infinity -> 2 + 2 = 4
   E      | infinity             -> 4+3 | 2+2+3 | 2+2+1+1
   F      | infinity -> 2+4 | 2+2+1

Visited: [A, C, B, D,F]

Whhere we came from -> the node right before B on our path.
Previoiuse: { A: null, B: null, C: null, D: null, E: null, F: null };
Previoiuse: { A: null, B: A, C: A, D: C, E: B3->F1, F: C4->D1 };
`;

`
So to break that down again, I won't go step by step, but every time through we pick the current smallest distance from A that we haven't visited.

We explore each of its neighbors and we calculate the new shortest distance to each neighbor.

And if it's smaller than what we already stored, we update what we stored, and then we reflect the change over here in our previous data structure.

And this allows us to piece everything together.

So if we look at this, we're done.

Now all we have to do is work backwards.

So to get to E from A, we start at E and we look at All right F well, to get to F from a the shortest

possible way.

That's what this is all storing.

We end up with a list of the shortest way to get to any node from a the shortest way to get to D from

A is through C and to get to the C, we have to go from A, so a C, D, that's the shortest way to

get there.

The shortest way to get to E is through F and from F.

First we go through D, from D, we go through C, C to A.

So this is our shortest path a, c, d, f, e.

So Dijkstra's algorithm works not only to give you the shortest path between two nodes at the end.

The way we're implementing it, we'll have a data structure that gives us the shortest path from A to

all the nodes, and that can be very useful if you you run this once and you don't change your graph,

you have this structure that gives you the shortest path to go anywhere.

You don't have to rerun it for every if you're trying to go from A to B and then A to D and A to E,

you run it one time and you get all that information.

All right.

So I know it's a lot.

I made these slides, took forever to make and I hope they were helpful.

I definitely recommend stepping through them on your own and just without me kind of explaining what

I'm doing in the video, try and or even on a piece of paper.

That's how I learned it originally.

Literally graph paper, drawing these charts out and keeping track of, All right, we've been to a

cross it off, we've been to B cross it off and drawing the graph out because from here the jump to

the code isn't that bad.

It's just going to be difficult if you're not sure how this actually works.

So I really, really, really recommend that you do that.

If you're at all confused, if you don't feel like rewatching the video, I don't blame you.

It's long.

It's not that exciting to go through, but it can be a little more engaging if you do it on your own.

And then once you understand it, jumping to the code is a lot easier.

All right.

So that's what we're going to do next.

I'll actually show you sort of real pseudocode, if you will, and then if you want, you can try and

implement it.

Or because this is a little complicated, totally understandable if you just code along with me.

All right.

It's coming up next.


`