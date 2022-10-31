/*
Kadane's algorithm

M = Max subarray of [0..n-1]
Max(A[M]+A[n], A[n])
*/
// var maxSubArray = function (nums) {
//   let max_current = nums[0];
//   let max_global = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     max_current = Math.max(nums[i], max_current + nums[i]);
//     max_global = Math.max(max_current, max_global);
//   }

//   return max_global;
// };
// var maxSubArray = function (nums) {
//   let max_global = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
//     max_global = Math.max(nums[i], max_global);
//   }

//   return max_global;
// };

var maxSubArray = function (nums) {
  /*
    algorithm is =>
    Math.max(nums[i], nums[i] + max[0..i-1])
  */

  let arr = [nums[0]];
  let max = 0;

  for (let i = 1; i < nums.length; i++) {
    arr[i] = Math.max(nums[i], nums[i] + arr[i - 1]);
    max = Math.max(arr[i], max);

    console.log("arr: ", arr);
  }

  console.log("max: ", max);
  return max;
};

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
maxSubArray([-2, 1, -3, 4, -1]);
