/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
  //     1. iterate through array
  //     2. have a counter variable for counting consecutive ones, and another variable called max for tracking max value
  //     3. if the next value is 1, iterate count
  //     4. if not, set count to zero
  //     5. at the end of the iteration, return max value
  //     [1,0,1,1,0,1]
      
      let count = 0, max = 0;
      
      for(let i = 0; i <= nums.length; i++) {
          if(nums[i] === 1) {
              count++
          } else {
              max = Math.max(count, max)
              count = 0
          }   
      }
      return Math.max(count, max)
  };

console.log(findMaxConsecutiveOnes([1,0,1,1,0,1]))
