/*
  Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

  A subarray is a contiguous part of an array.
*/

// const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const arr = [-2, -1]

function maximumSubArray(arr) {
  /* brute force:
    for i in array {
      for j in array {
        maxnum = max(i, j)
      }
    }
  */

  // public int maxSubArray(int[] nums) {
  //   int maxSubarray = Integer.MIN_VALUE;
  //   for (int i = 0; i < nums.length; i++) {
  //       int currentSubarray = 0;
  //       for (int j = i; j < nums.length; j++) {
  //           currentSubarray += nums[j];
  //           maxSubarray = Math.max(maxSubarray, currentSubarray);
  //       }
  //   }
      
  //     return maxSubarray;
  // }



 let score;
 let max = -99999;
 let maxInd = [0, 0]
 for( let i = 0; i < arr.length; i++ ) {
    score = 0;

    for( let j = i; j < arr.length; j++ ) {
      
      score += arr[j];

      max = Math.max(score, max)
    }
  }

  return max;



}

function init() {
  console.log(maximumSubArray(arr))
}

module.exports = { init }