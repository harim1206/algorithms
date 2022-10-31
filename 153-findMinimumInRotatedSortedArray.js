var findMin = function (nums) {
  /*
    Look at the first number and last number
    Compare it to the middle
    
    If the middle number is higher than the first number 
      =>  left side is sorted
        => if first number is higher than last number
          => min is on the right side
        => if first number is less than last number
          => first number is the minimum
    else 
      => search right
      [3, 4, 5, 1, 2]

  */

  let left = 0,
    right = nums.length - 1,
    middle,
    min = Infinity;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    min = Math.min(min, nums[middle]);

    // if the middle number is higher than the left number, left side is sorted
    if (nums[middle] >= nums[left]) {
      // if the left number is greater than the right number, search right
      if (nums[left] > nums[right]) {
        left = middle + 1;
      } else {
        // if the left number is less than the right number, left side is sorted
        min = Math.min(min, nums[left]);
        return min;
      }
      // if the middle number is less than the left number, search left
    } else {
      right = middle - 1;
    }
  }

  return min;
};
