/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.
*/

// arrays, sets, maps, objects
const arr = [5, 2, 3, 4, 7]

function productOfArrays(arr) {
  const left = new Array(arr.length)
  const right = new Array(arr.length);
  const ans = new Array(arr.length);
  left[0] = 1;
  right[arr.length - 1] = 1

  for(let i = 1; i < arr.length; i++) {
    // left: [1, (1x5)5, (1x5x2)10, 15, 120]
    left[i] = left[i - 1] * arr[i - 1]
  }

  for(let j = arr.length - 2; j >= 0; j--) {
    // right: [x, x, 28, 7, 1]
    right[j] = right[j + 1] * arr[j + 1]
  }

  for(let k = 0; k < arr.length; k++) {
    ans[k] = left[k] * right[k]
  }

  console.log('left: ', left)
  console.log('right: ', right)
  console.log('ans: ', ans)
  
}

function init() {
  console.log(productOfArrays(arr));
}

module.exports = { init }
