/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (arr) {
  // arr = [2, 3, 4, 5]
  // left = [1, 2, 6, 24]
  // right = [60, 20, 5, 1]
  // result = [60, 40, 30, 24]
  // left[i] = arr[0] * arr[1] * ... * arr[i-1]
  // right[i] = arr[i+1] * arr[i+2] * ... * arr[arr.length-1]

  const left = [];
  const right = [];
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    i === 0 ? (left[i] = 1) : (left[i] = left[i - 1] * arr[i - 1]);
    console.log("left: ", left);
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    i === arr.length - 1
      ? (right[i] = 1)
      : (right[i] = right[i + 1] * arr[i + 1]);
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
};

console.log(productExceptSelf([2, 3, 4, 5]));
