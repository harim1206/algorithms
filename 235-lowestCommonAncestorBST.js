/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  /*
  In binary tree, all of the numbers in the left sub tree are less than the node, and vice versa.
  In this problem, p and q are guaranteed to be in the tree.

  If P and Q are both larger than node, then traverse the left subtree
  If P and Q are both less than node, then traverse the right subtree
  If P <= node <= Q or Q <= node <= P, then node is the LCA

*/

  if (!root) {
    return;
  }

  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};

/*
recursive
var lowestCommonAncestor = function(root, p, q) {
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    return root;
};



*/
// iterative
// let node = root;

// while (node) {
//   if (p.val > node.val && q.val > node.val) {
//     node = node.right;
//   } else if (p.val < node.val && q.val < node.val) {
//     node = node.left;
//   } else {
//     return node;
//   }
// }
