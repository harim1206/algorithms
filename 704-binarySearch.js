var search = function(nums, target) {
/*
  1. identify the left and right pointer.
  2. identify the middle pointer.
  3. if middle pointer is greater than target, set right pointer to middle - 1
  4. if middle pointer is less than target, set left pointer to middle + 1
  5. if middle pointer is equal to target, return the index
  6. do this while the right pointer is greater or equal to the left pointer

*/

  let left = 0, right = nums.length - 1, middle = 0

  while(left <= right) {
    middle = Math.floor(left + (right - left)/2)
    console.log('nums[middle]: ', nums[middle])

    if(nums[middle] < target) {
      left = middle + 1
    }
    else if (nums[middle] > target){
      right = middle - 1
    }
    else {
      return middle
    }
  }

  return -1
    
};

console.log(search([-1, 2, 5, 15, 25, 40], 40))