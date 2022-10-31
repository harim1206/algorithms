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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // if subRoot is null, return true
  if (!subRoot) return true;
  // if root doesn't exist, return false
  if (!root) return false;
  // if the root and the subroot are the same trees, return true
  if (isSameTree(root, subRoot)) return true;

  // if either the left subtree or the right subtree are equal to the subroot tree, return true
  return isSubtree(root.left, subRoot) || isSubtree(root.left, subRoot);

  function isSameTree(p, q) {
    // if both of the nodes don't exist, return true
    if (!p && !q) return true;
    // if one exists but not the other, return false
    if (!p || !q) return false;

    // if p.val and q.val are equal and its left subtrees and the right subtrees are equal, return true
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    );
  }
};
