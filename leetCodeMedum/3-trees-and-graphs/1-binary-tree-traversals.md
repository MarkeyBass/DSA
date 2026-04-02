# Binary tree traversals (inorder, preorder, postorder)

Use one **example tree** everywhere so the three orders are easy to compare.

## Example tree (LeetCode Example 2 style)

**Level-order input:** `[1,2,3,4,5,null,8,null,null,6,7,9]`

```
            1
           / \
          2   3
         / \   \
        4   5   8
           / \ /
          6  7 9
```

| Traversal  | Result for this tree |
| ---------- | -------------------- |
| **Preorder**  (root → left → right) | `[1,2,4,5,6,7,3,8,9]` |
| **Inorder**   (left → root → right) | `[4,2,6,5,7,1,3,9,8]` |
| **Postorder** (left → right → root) | `[4,6,7,5,2,9,8,3,1]` |

---

## Inorder — recursive “call stack” walkthrough

**Rule:** `traverse(left)` → `push value` → `traverse(right)` (with `if (!node) return` at the start).

Below is the same step-by-step flow as in `3-Inorder-notes-for-Binary-Tree-Traversal.js`: each line is what happens as the recursion goes down and returns. **`push`** appends to the result array; **`return`** means that `traverse(n)` call finishes.

```
traverse(1)
traverse(2)
traverse(4) push return [4]
traverse(2) push        [4, 2]
traverse(5)
traverse(6) push return [4, 2, 6]
traverse(5) push        [4, 2, 6, 5]
traverse(7) push return [4, 2, 6, 5, 7]
traverse(5)      return
traverse(2)      return
traverse(1) push        [4, 2, 6, 5, 7, 1]
traverse(3) push        [4, 2, 6, 5, 7, 1, 3]
traverse(8)
traverse(9) push return [4, 2, 6, 5, 7, 1, 3, 9]
traverse(8) push return [4, 2, 6, 5, 7, 1, 3, 9, 8]
traverse(3) return
traverse(1) return
```

**How to read it:** After `traverse(4)` returns, you are **still inside** `traverse(2)` — you do not “call `traverse(2)` again”; you continue that frame, `push(2)`, then enter `traverse(5)`, and so on.

**Iterative inorder (stack):** Go left as far as possible, pushing nodes; then `pop`, append value, `node = node.right`. Repeat until `node` is null and the stack is empty.

---

## Preorder

**Order:** root → left → right.

**Recursive:** `push(val)` → `traverse(left)` → `traverse(right)`.

**Iterative:** Use a stack. Pop a node, record value, then **push right, then left** so **left** is on top next (LIFO).

No `reverse()` at the end.

---

## Postorder

**Order:** left → right → root.

**Recursive:** `traverse(left)` → `traverse(right)` → `push(val)`.

**Iterative (common trick):** Pop nodes, record values, **push left then right** (right processed next from stack). That yields order **root → right → left**. **`reverse()`** the list → **left → right → root**.

Example 1 tree `1 — 2 — 3` (3 left of 2): postorder is `[3,2,1]`, not inorder `[1,3,2]`.

---

## One-line memory aids

- **Preorder:** print **on the way down** (before children).
- **Inorder:** print **between** left and right (BST gives sorted order if it is a BST).
- **Postorder:** print **on the way up** (after both subtrees); delete/serialize patterns often use this.

---

## Files in this repo

| File | Topic |
| ---- | ----- |
| `3-Inorder-Binary-Tree-Traversal.js` | Inorder solution |
| `3-Inorder-notes-for-Binary-Tree-Traversal.js` | Inorder recursion + diagram notes |
| `3-Preorder-Binary-Tree-Traversal.js` | Preorder |
| `3-Postorder-Binary-Tree-Traversal.js` | Postorder |
