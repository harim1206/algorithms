/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  //Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
  /*
    preorder = root, left, right
    inorder = left, root, right
    preorder[0] = root
    inorder = [9,<3,> 15,20,7]
    rootIndex = inorder.indexOf(preorder[0])
    leftSubTreeLength = inorder.slice(0, rootIndex).length
    rightSubTreeLength = inorder.slice(rootIndex, inorder.length).length
    preorder = [n, 9,20,15,7],
    leftSubTreePreOrder = preOrder.slice(1, leftSubTreeLength)
    rightSubTreePreOrder = preOrder.slice(1 + leftSubTreeLength, preOrder.length)
  */

  if (!preorder.length || !inorder.length) return null;

  const root = new TreeNode(preorder[0]);
  const rootIndex = inorder.indexOf(preorder[0]);
  const leftSubTreeInorder = inorder.slice(0, rootIndex);
  const rightSubTreeInorder = inorder.slice(rootIndex + 1);
  const leftSubTreePreorder = preorder.slice(1, leftSubTreeInorder.length + 1);
  const rightSubTreePreorder = preorder.slice(leftSubTreeInorder.length + 1);

  root.left = buildTree(leftSubTreePreorder, leftSubTreeInorder);
  root.right = buildTree(rightSubTreePreorder, rightSubTreeInorder);

  return root;
};
