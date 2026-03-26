// MaxBinaryHeap - parent nodes always larger then child nodes
// MinBinaryHeap - parent nodes always smaller then child nodes
// Each parent have at most two nodes without specific ordr for the children.
// A binary heap is as compact as possible.

// Max Binary Heap
// ====================
// • Each parent has at most two child nodes
// • The value of each parent node is always greater than
// its child nodes
// • In a max Binary Heap the parent is greater than the
// children, but there are no guarantees between sibling
// nodes.
// • A binary heap is as compact as possible. All the
// children of each node are as full as they can be and
// left children are filled out first


// Min Binary Heap
// ====================
// • Each parent has at most two child nodes
// • The value of each parent node is always less than (or
// equal to) its child nodes
// • In a min Binary Heap the parent is smaller than the
// children, but there are no guarantees between sibling
// nodes.
// • A binary heap is as compact as possible. All the
// children of each node are as full as they can be and
// left children are filled out first


// Find the child's index when binary heap is represented as an array
let parent = 0; // parent index
let leftChild = parent * 2 + 1
let rightChild = parent * 2 + 2

// For any index of an array n...
// The left child is stored at 2n + 1
// The right child is at 2n +2


// For any child node at index n...
// Its parent is at index (n-1)/2
// floored

// parent = Math.floor((child - 1) / 2)