// Given the head of a singly linked list,
// group all the nodes with odd indices together followed by the nodes with even indices,
// and return the reordered list.

// The first node is considered odd, and the second node is even, and so on.
// Note that the relative order inside both the even and odd groups should remain as it was in the input.

// You must solve the problem in O(1) extra space complexity and O(n) time complexity.

// Odd Even Linked List — reorder by node *position* (1st, 2nd, …): odd positions
// first, then even positions; relative order preserved within each group.
//
// Example 1 (diagram: odd-index nodes light, even-index purple on the slide)
//
//   Input list (positions 1…5 under each node):
//       1 ──► 2 ──► 3 ──► 4 ──► 5 ──► null
//      (1)   (2)   (3)   (4)   (5)
//      odd   even  odd   even  odd
//
//   Output list:
//       1 ──► 3 ──► 5 ──► 2 ──► 4 ──► null
//      (odd positions first, then even positions)
//
//   Input:  head = [1,2,3,4,5]
//   Output: [1,3,5,2,4]
//
// Example 2
//
//   Input list:
//       2 ──► 1 ──► 3 ──► 5 ──► 6 ──► 4 ──► 7 ──► null
//      (1)   (2)   (3)   (4)   (5)   (6)   (7)
//      odd   even  odd   even  odd   even  odd
//
//   Output list:
//       2 ──► 3 ──► 6 ──► 7 ──► 1 ──► 5 ──► 4 ──► null
//
//   Input:  head = [2,1,3,5,6,4,7]
//   Output: [2,3,6,7,1,5,4]
//
// Constraints:
//
// The number of nodes in the linked list is in the range [0, 10^4].
// -10^6 <= Node.val <= 10^6

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

//   Input:  head = [1,2,3,4,5]
//   Output: [1,3,5,2,4]
// 1 > 5 3 > 2
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {
  if (!head || !head.next) return head;

  let odd = head;
  let even = head.next;
  const evenHead = even;

  while (even !== null && even.next !== null) {
    // Link current odd to the next odd node
    odd.next = even.next;
    // Move odd pointer forward
    odd = odd.next;

    even.next = odd.next;
    even = even.next;
  }
  odd.next = evenHead;

  return head;
};

console.dir(oddEvenList(n1), { depth: null });
