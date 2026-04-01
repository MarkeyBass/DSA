// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.
// Example 1:

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
//
//   l1:  (2) -> (4) -> (3)     // 342 (digits reversed: ones, tens, hundreds)
//   l2:  (5) -> (6) -> (4)     // 465
//        ─────────────────
//   sum: (7) -> (0) -> (8)     // 807
//
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// var addTwoNumbers = function (l1, l2) {
//   let num1 = "",
//     num2 = "";
//   let node1 = l1;
//   let node2 = l2;
//   while (node1.next) {
//     num1 += node1.val;
//     node1 = node1.next;
//   }
//   num1 += node1.val;
//   num1 = num1.split().reverse().concat() * 1;

//   while (node2.next) {
//     num2 += node2.val;
//     node2 = node2.next;
//   }
//   num2 += node2.val;
//   num2 = num2.split().reverse().concat() * 1;

//   console.log(num1 + num2);

//   const str = num1 + num2 + "";
//   let head;
//   let prev = null;
//   for (let i = 0; i < str.length; i++) {
//     const node = new ListNode(str[i], prev);
//     node.next = prev;
//     prev = node;
//     if (i === str.length - 1) {
//       head = node;
//     }
//   }
//   return head;
// };

// class Node {
//   constructor(val, next) {
//     this.val = val;
//     this.next = next;
//   }
// }

// class SLL {
//   constructor() {
//     this.head = null;
//     this.tail = null;
//     this.length = 0;
//   }
// }

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

// function main() {
//   // Input: l1 = [2,4,3], l2 = [5,6,4]
//   // Output: [7,0,8]
//   // Explanation: 342 + 465 = 807.

//   // [2,4,3]  -> 342
//   const n3 = new ListNode(3);
//   const n2 = new ListNode(4, n3);
//   const n1 = new ListNode(2, n2);

//   // [5,6,4] -> 465
//   const n6 = new ListNode(4);
//   const n5 = new ListNode(6, n6);
//   const n4 = new ListNode(5, n5);

//   const result = addTwoNumbers(n1, n4);
//   console.log(result)
//   console.log(result.next)
//   console.log(result.next.next)
//   // while (result.next) {
//   //   console.log(result.val);
//   // }
// }

// main();

// // Helper to turn [2,4,3] into a Linked List
// function arrayToList(arr) {
//   let dummy = new ListNode(0);
//   let curr = dummy;
//   for (let val of arr) {
//       curr.next = new ListNode(val);
//       curr = curr.next;
//   }
//   return dummy.next;
// }

// const l1 = arrayToList([2, 4, 3]);
// const l2 = arrayToList([5, 6, 4]);

// console.log(l1)
// console.log(l2)

//   // Input: l1 = [2,4,3], l2 = [5,6,4]
//   // Output: [7,0,8]
//   // Explanation: 342 + 465 = 807.

function arrToSLL(arr) {
  const tempHead = new ListNode(0);
  let currNode = tempHead;
  for (let el of arr) {
    currNode.next = new ListNode(el);
    currNode = currNode.next;
  }
  return tempHead.next;
}
//   // Input: l1 = [2,4,3], l2 = [5,6,4]
//   // Output: [7,0,8]
//   // Explanation: 342 + 465 = 807.

// //   // [2,4,3]  -> 342
// const l1 = arrToSLL([2, 4, 3]);
// //   // [5,6,4] -> 465
// const l2 = arrToSLL([5, 6, 4]);


const l1 = arrToSLL([9,9,9,9,9,9,9]);

const l2 = arrToSLL([9,9,9,9]);

console.dir(l1, {depth: null});
console.dir(l2, { depth: null });

const result = addTwoNumbers(l1, l2);
console.dir(result, { depth: null });

function addTwoNumbers(l1, l2) {
  let remainder = 0;

  let node1 = l1;
  let node2 = l2;

  const tempHead = new ListNode(0);
  let currNode = tempHead;

  while (node1 || node2) {
    let sum;
    if (node1 && node2) {
      sum = node1.val + node2.val + remainder;
    } else if (!node1) sum = node2.val + remainder;
    else sum = node1.val + remainder;
    let val;
    if (sum >= 10) {
      val = sum - 10;
      remainder = 1;
    } else {
      val = sum;
      remainder = 0;
    }
    currNode.next = new ListNode(val);
    currNode = currNode.next;

    node1 = node1?.next ? node1.next : null;
    node2 = node2?.next ? node2.next : null;
    let temp = true;
  }

  if(remainder) currNode.next = new ListNode(1)

  return tempHead.next;
}

// https://leetcode.com/explore/interview/card/top-interview-questions-medium/107/linked-list/783/

// Took me much longer then one hour. I didn't understand the requirements till I asked AI (Spent around 1.5 hours going the wrong way.
// After some hints - I understood how to answer, yet it took many iterations and many times I ran the code till I received a satisfying result.
// Took me around 4 hours to solve it.
// I had to use the IDE's debugger to solve edge cases.