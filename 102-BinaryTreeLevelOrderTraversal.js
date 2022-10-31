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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // root.left
  // root.right

  if (!root) return [];

  const queue = [root];
  const ans = [[root.val]];

  while (queue.length) {
    for (let i = 0; i < queue.length; i++) {
      const node = queue.shift();
      let left, right;
      if (node.left) {
        queue.push(node.left);
        left = node.left.val;
      } else {
        left = null;
      }

      if (node.right) {
        queue.push(node.right);
        right = node.right.val;
      } else {
        right = null;
      }

      if (left && right) ans.push([left, right]);
    }
  }

  console.log(ans);
  return ans;
};
