/*
 apply binary search on rows and cols
*/
var searchMatrix = function (matrix, target) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  let top = 0;
  let bottom = rows - 1;

  while (top <= bottom) {
    // compare the last value of a row with target
    const middle = Math.floor((top + bottom) / 2);
    console.log("middle: ", middle);
    console.log("matrix[middle]: ", matrix[middle]);
    const lastElem = matrix[middle][cols - 1];
    const firstElem = matrix[middle][0];

    if (target > lastElem) {
      top = middle + 1;
    } else if (target < firstElem) {
      bottom = middle - 1;
    } else {
      console.log("middle: ", middle);
      return bs(matrix[middle], target);
    }
  }

  return false;

  function bs(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let middle;

    while (left <= right) {
      middle = Math.floor((right + left) / 2);
      console.log("left: ", left);
      console.log("middle: ", middle);
      console.log("right: ", right);

      // target is left of middle
      if (arr[middle] < target) {
        left = middle + 1;
        // target is right of middle
      } else if (arr[middle] > target) {
        right = middle - 1;
      } else {
        return true;
      }
    }

    return false;
  }
};

// const arr = [
//   [1, 3, 5, 7],
//   [10, 11, 16, 20],
//   [23, 30, 34, 60],
// ];

const arr = [[1], [3]];

console.log(searchMatrix(arr, 3));
