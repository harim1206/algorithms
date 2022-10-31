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
 * 
Preorder ⇒ Root, left sub tree, right subtree
Inorder ⇒ left subtree, root, right subtree
Postorder ⇒ left subtree, right subtree, root

*/
var maxDepth = function (root) {
  /*
  recursive
  if (!root) return 0;
  const left = maxDepth(root.left)
  const right = maxDepth(root.right)

  return 1 + Math.max(left, right);
  */

  /*
    iterative using queue BFS
    if (!root) return 0;
    let level = 0;
    let queue = [root];
  
    while (queue.length) {
      for (let i = 0; i < queue.length; i++) {
        const node = queue.shift();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
      level++;
    }
    return level;
  */

  /*
    iterative using queue DFS Preorder
  */

  let res = 0;
  let stack = [[root, 1]];

  while (stack.length) {
    let [node, depth] = stack.pop();

    if (node) {
      res = Math.max(res, depth);
      stack.push([node.left, depth + 1]);
      stack.push([node.right, depth + 1]);
    }
  }

  return res;
};

/*
    recursive
    1. calculate the maximum depth of left subtree & right subtree
    2. return the larger of the two, and add one
    3. base case. If the root node is empty, do nothing.

    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
*/

/*
    Iterative
    For level order search (breadth first search) - use queue.
    For every node in the existing queue, remove the first item, and add its children to the queue.
    Each time the queue is cleared, before its children are added to the queue, indicates a level.
    Use a global varaible level to track the number of levels.
    
    if (!root) return 0;
    const queue = [root]
    let level = 0; 
    
    while(queue.length > 0) {
        let len = queue.length
        for(let i = 0; i < len; i++) {
            let node = queue.shift()
            if(node.left) queue.push(node.left)
            if(node.right) queue.push(node.right)
            
        }
        // queue level cleared, increment level
        level++
    }
    
    return level
*/

/*
    Iterative
    Depth first search - use stack
    Start with a stack.
    Pop the stack, and add its left subtree and right subtree to the stack.
    
    if(!root) return 0;
    const stack = [[root,1]]
    let level = 0
    
    while(stack.length > 0) {
        const [node, depth] = stack.pop()
        level = Math.max(level, depth)
        
        if(node.left) stack.push([node.left, depth + 1])
        if(node.right) stack.push([node.right, depth + 1])
    }
    
    
    return level;
*/
