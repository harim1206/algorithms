/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 *
 *
 *
 * BFS takes in a node, and logs the value in BFS (level) order
 * DFS takes in a node, and logs the values in DFS (preorder, inorder, postorder) order 
      Preorder ⇒ Root, left sub tree, right subtree
      Inorder ⇒ left subtree, root, right subtree
      Postorder ⇒ left subtree, right subtree, root
 */

function BFS(root) {
  const queue = [root];

  while (queue.length) {
    let current = queue.shift();
    console.log(current.val);
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
}

// Iterative Preorder Root, Left, Right
function BFS(root) {
  const stack = [root];

  while (stack.length) {
    let current = stack.pop();
    console.log(current.val);
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
}

// Recursive
function BFS(root) {
  if (!root) return;

  // Pre
  console.log(root.val);
  BFS(root.left);
  BFS(root.right);

  // In
  // BFS(root.left);
  // console.log(root.val);
  // BFS(root.right);

  // Post
  // BFS(root.left);
  // console.log(root.val);
  // BFS(root.right);
}
