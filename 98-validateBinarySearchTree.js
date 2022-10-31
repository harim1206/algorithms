var isValidBST = function (root) {
  /*
    1. Set minimum and maximum.
    2. From root, compare the root value to the left value and the right value. If (Left < Root < Right) does not hold, it is not a valid tree.
    3. In addition, (Min < Root < Max) also has to hold.
    4. How do we update Min & Max?
      - When you traverse the recursive function to the right, the minimum gets updated to the parent node.
      - When you traverse the recursive function to the left, the maximum gets updated to the parent node.
      - This has to hold => every node on the left subtree is less than the root, and vice

  */

  let min = -Infinity,
    max = Infinity;

  function recurse(node, min, max) {
    // check if node is null
    if (!node) return true;
    console.log('node.val: ', node.val);
    console.log('min: ', min);
    console.log('max: ', max);

    // compare the value of the left node value and right node value
    if (node.left) {
      // if node left value is greater than node val, return false
      if (node.left.val >= node.val || node.left.val <= min) return false;
    }

    if (node.right) {
      // if node left value is greater than node val, return false
      if (node.right.val <= node.val || node.right.val >= max) return false;
    }

    return (
      true &&
      recurse(node.left, min, node.val) &&
      recurse(node.right, node.val, max)
    );
  }

  return recurse(root, min, max);
};
