/*
  at the last iteration,
  left & right are both at 4, then the while loop gets broken when
  left is 4 and right is 3
  therefore the answer is 3
*/
var mySqrt = function (x) {
  let left = 0;
  let right = x;
  let middle;

  while (left <= right) {
    middle = Math.floor(left + (right - left) / 2);
    let sq = middle * middle;
    console.log("left: ", left);
    console.log("middle: ", middle);
    console.log("right: ", right);
    console.log("sq: ", sq);

    if (sq > x) {
      right = middle - 1;
    } else if (sq < x) {
      left = middle + 1;
    } else {
      return middle;
    }
  }

  return right;
};

console.log(mySqrt(10));
