/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
  let diameter = 0;

  const maxDepth = (node) => {
    if (!node) return 0;

    const left = maxDepth(node.left);
    const right = maxDepth(node.right);

    // update diameter if the diameter of the current node is greater than prev
    diameter = Math.max(diameter, left + right);

    return 1 + Math.max(left, right);
  };

  maxDepth(root);

  return diameter;
};

/*
let diameter = 0;

  dfs(root);

  return diameter;

  function dfs(node) {
    if (!node) return 0;

    const left = dfs(node.left);
    const right = dfs(node.right);

    // update diameter at every node
    diameter = Math.max(diameter, left + right);

    // update the largest number of edge so far
    return 1 + Math.max(left, right);
  }
*/
